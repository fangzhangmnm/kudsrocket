// 按下锁存（纯函数，host.c 每帧调一次；test/taplatch.test.ts 用 cc 验）—— created 20261017 by Claude Opus 5.5
//
// 问题（W-38，user 10-17）：「怪猎的箱子整理涉及快速的方向键操作……快速连按好几下箱子也只动了一格」。
//   连按 N 下只动 1 格 = 按键的「松开」没被游戏看到：核每帧读一次按键状态（retro_input），游戏再按自己的节奏采样（怪猎 30 帧 = 隔一帧采一次）。
//   一下点按要是整个落在两次读之间（按下 + 松开都在一帧里），或者只露了一帧、正好落在游戏不采样的那一帧，游戏就看不到；
//   几下连按的松开都没被看到，就连成了一次长按。
// 做法：页面每看到一次「新按下」就记一笔（kr_input_tap）。核每帧：有排队的点按 → 放出来，保证游戏看到至少 HOLD 帧按下、再至少 GAP 帧松开，
//   才放下一下；没有排队的 → 照实际按着的状态（长按照旧是长按）。排队最多 QMAX 下（多出来的丢掉、计数），免得一串连按拖成好几秒的尾巴。
//   单独一下点按不加延迟（下一帧就放）；只有前一下还没放完时，后一下才等（最多等 HOLD + GAP 帧）。
#pragma once
#include <stdint.h>

#define KR_TAP_HOLD 2   // 放出的点按至少按住几帧（怪猎 30 帧 = 隔帧采样，1 帧会漏）
#define KR_TAP_GAP 2    // 两下之间至少松开几帧（同理）
#define KR_TAP_QMAX 4   // 每个键最多排几下

typedef struct {
  uint8_t q[16], hold[16], gap[16];   // 每个键：排队的点按数、还要按住几帧、还要松开几帧
  double received, played, dropped;    // 累计：收到几下、放出几下、因为排满丢掉几下
} KrTapLatch;

/** 一帧：taps[b] = 这一帧之前新收到的「按下」次数（读完清零由调用方做）；live = 此刻实际按着的键位。返回这一帧给游戏的键位。 */
static inline uint32_t kr_tap_step(KrTapLatch *L, const unsigned taps[16], uint32_t live) {
  uint32_t eff = 0;
  for (int b = 0; b < 16; b++) {
    if (taps[b]) {
      L->received += taps[b];
      unsigned q = L->q[b] + taps[b];
      if (q > KR_TAP_QMAX) { L->dropped += q - KR_TAP_QMAX; q = KR_TAP_QMAX; }
      L->q[b] = (uint8_t)q;
    }
    int down;
    if (L->hold[b]) {                       // 正在放一下：继续按住
      down = 1;
      if (--L->hold[b] == 0 && L->q[b]) L->gap[b] = KR_TAP_GAP;   // 放完了、后面还有排队的 → 先松开 GAP 帧
    } else if (L->gap[b]) {                 // 两下之间的松开
      down = 0;
      L->gap[b]--;
    } else if (L->q[b]) {                   // 放下一下
      L->q[b]--;
      L->played += 1;
      down = 1;
      L->hold[b] = KR_TAP_HOLD - 1;
      if (L->hold[b] == 0 && L->q[b]) L->gap[b] = KR_TAP_GAP;
    } else {
      down = (int)((live >> b) & 1);        // 没有排队的：照实际状态（长按、松开）
    }
    eff |= (uint32_t)down << b;
  }
  return eff;
}
