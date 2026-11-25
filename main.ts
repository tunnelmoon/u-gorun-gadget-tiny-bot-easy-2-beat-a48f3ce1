// Tiny Bot, Easy $2: Beat Buy-and-Hold on Solana.
// Entry point for the bars-replay/v1 harness (agent-fun/bars-replay/v1).
//
// How it runs: the harness speaks the line protocol on stdin. It opens with a
// hello (the symbols, the capital, the caps, the fees), then sends one batch per
// bar (that bar's closes for every symbol, the fills of the orders decided on the
// previous batch, and the account), and finally a done. This file answers every
// batch with exactly one reply: the orders decided on that batch, echoing its seq.
// The strategy itself lives in strategy.ts (DipBounceStrategy): buy a close that
// fell 2% under its 12-bar EMA, exit at +3%, at -1.5%, or after 24 bars.
//
// The vendor shim (vendor/makefun-bars.ts, a byte-identical copy of the kit's
// sdk/makefun-bars.ts) owns the wire: one JSON line at a time, exactly one reply
// per batch, client ids filled in when left out, and an OrderError for anything
// the harness would call a protocol violation, so a broken bot fails here and
// not in grading. Replies go to stdout only; diagnostics go to stderr.
//
// Nothing here reads the clock, the environment, or Math.random, so the two runs
// the grader makes produce byte-identical action logs.

import { runBars } from './vendor/makefun-bars.ts';
import { DipBounceStrategy } from './strategy.ts';

const strategy = new DipBounceStrategy();

await runBars({
  onBatch(state) {
    return strategy.decide(state);
  },
});
