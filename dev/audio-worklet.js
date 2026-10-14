// 声音出口（AudioWorklet 线程）—— created 20261014 by Claude Opus 5.5
// 直接从核的共享内存里读环形缓冲（不经主线程）：w / r 是单调递增的帧计数（int32 回绕无妨），r 由这里推进并 notify 核线程。
// 设计见 core/ppsspp/host.c 文件头「声音 + 限速」。
//
// 按水位微调播放速度（动态速率控制）：不比较「声音时钟」和「墙钟」谁对（两者会漂，iPad 睡醒后还会失步——MoonSinger 踩过），
// 只看缓冲水位：平滑后的水位高于目标就略放快、低于目标就略放慢，最多 ±0.5%（听不出来）。
// 正常漂移不再爆音；声音时钟整个停掉这种大事才会丢声音（对齐模式下宁愿爆音，不拖模拟）。
// 顺带做采样率换算：浏览器给的不是核的 44.1 kHz 时按比例读，不变调。
const MAX_ADJUST = 0.005;

class KrAudio extends AudioWorkletProcessor {
  constructor(options) {
    super();
    const o = options.processorOptions;
    this.ring = new Int16Array(o.buffer, o.ringPtr, o.ringFrames * 2);
    this.i32 = new Int32Array(o.buffer);
    this.wIdx = o.wPtr >> 2;
    this.rIdx = o.rPtr >> 2;
    this.uIdx = o.underrunPtr >> 2;
    this.mask = o.ringFrames - 1;
    this.base = o.coreRate / sampleRate; // 每个输出采样前进多少个核采样
    this.target = o.targetFrames;
    this.fillAvg = o.targetFrames;
    this.frac = 0;
    this.port.onmessage = (e) => { if (e.data?.targetFrames) this.target = e.data.targetFrames; };
  }

  process(_inputs, outputs) {
    const out = outputs[0];
    const L = out[0];
    const R = out[1] ?? out[0];
    let r = Atomics.load(this.i32, this.rIdx);
    const w = Atomics.load(this.i32, this.wIdx);
    const fill = (w - r) | 0;
    this.fillAvg += (fill - this.fillAvg) * 0.02; // 每块约 2.9 ms，时间常数约 150 ms
    const err = Math.max(-1, Math.min(1, (this.fillAvg - this.target) / this.target));
    const step = this.base * (1 + err * MAX_ADJUST);
    const ring = this.ring, mask = this.mask;
    let frac = this.frac;
    let missing = 0;
    for (let i = 0; i < L.length; i++) {
      if (((w - r) | 0) < 2) { // 不够插值：补静音
        L[i] = 0;
        R[i] = 0;
        missing++;
        continue;
      }
      const j0 = (r & mask) * 2, j1 = ((r + 1) & mask) * 2;
      L[i] = (ring[j0] + (ring[j1] - ring[j0]) * frac) / 32768;
      R[i] = (ring[j0 + 1] + (ring[j1 + 1] - ring[j0 + 1]) * frac) / 32768;
      frac += step;
      while (frac >= 1) { frac -= 1; r = (r + 1) | 0; }
    }
    this.frac = frac;
    Atomics.store(this.i32, this.rIdx, r);
    Atomics.notify(this.i32, this.rIdx);
    if (missing) Atomics.add(this.i32, this.uIdx, missing);
    return true;
  }
}

registerProcessor("kr-audio", KrAudio);
