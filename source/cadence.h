// 上屏节拍（纯函数，host.c 用；test/cadence.test.ts 用 cc 验算）—— created 20261016 by Claude Fable 5.1
//
// 问题（Quest 3 浏览器 72 Hz × 怪物猎人本身 30 帧，10-16 晚 user 日志 + 原话）：
//   30 帧的画面放到 72 Hz 的屏上，每帧要么占 2 次刷新（27.8 ms）要么占 3 次（41.7 ms），2、3 交替 = 抖。
//   user：「开了墙钟之后 30fps 但反而屏幕上卡」「不开这个选项 20fps 反而看起来流畅」（不开时碰巧接近每 3 次刷新一帧）。
//   帧率计数看不出这种抖：30 fps 一个数，抖在每帧占几次刷新的分布里。
// 做法：刷新率除不尽游戏帧率时，固定每 k 次刷新上屏一次（k = 向上取整的「每帧占几次刷新」），中间多出来的帧丢掉、绝不重复显示——
//   每帧占用时长恒定（72 Hz / 30 帧 → k = 3 → 每帧 41.7 ms、24 fps）。整除的（60 / 30、90 / 30、120 / 60）k = 1，和以前一样每次刷新都上屏。
//   游戏逻辑照常 100% 速度、声音照常，只是上屏少挑几帧。
// 没做的（等 user 真机一句话）：k 取 floor（36 个格子放 30 帧 = 每 6 帧重复一次）还是 ceil（24 个格子 = 每 5 帧丢一次）——按 user 的观感先取 ceil。
#pragma once
#include <math.h>

/** tick_ms = 屏一次刷新多久（量到的 rAF 间隔）；period_ms = 游戏上屏一帧多久（30 帧 = 33.3）。返回每几次刷新上屏一次（1 = 每次）。 */
static inline int kr_cadence_k(double tick_ms, double period_ms) {
  if (!(tick_ms > 0) || !(period_ms > 0)) return 1;
  double r = period_ms / tick_ms;               // 游戏一帧占几次刷新
  if (r < 1.5) return 1;                        // 游戏和屏差不多快（72 Hz 放 60 帧）：每次刷新都上屏，偶尔重复一帧好过丢四成的帧
  double nearest = floor(r + 0.5);
  if (fabs(r - nearest) <= 0.05 * r) return 1;  // 整除（容 5% 量测误差）：本来就匀，别动
  int k = (int)ceil(r);
  return k > 8 ? 8 : k;
}
