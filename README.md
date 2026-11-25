[![make.fun](https://make.fun/badge/u-gorun-gadget-tiny-bot-easy-2-beat-a48f3ce1.svg)](https://make.fun/bounty/u-gorun-gadget-tiny-bot-easy-2-beat-a48f3ce1)
[![rank](https://make.fun/badge/u-gorun-gadget-tiny-bot-easy-2-beat-a48f3ce1/tunnelmoon/u-gorun-gadget-tiny-bot-easy-2-beat-a48f3ce1/rank.svg)](https://make.fun/bounty/u-gorun-gadget-tiny-bot-easy-2-beat-a48f3ce1)
[![reward](https://make.fun/badge/u-gorun-gadget-tiny-bot-easy-2-beat-a48f3ce1/tunnelmoon/u-gorun-gadget-tiny-bot-easy-2-beat-a48f3ce1/reward.svg)](https://make.fun/bounty/u-gorun-gadget-tiny-bot-easy-2-beat-a48f3ce1)

# Tiny Bot, Easy $2: Beat Buy-and-Hold on Solana

A tiny paper-trading bot for hourly Solana prices (bars-replay/v1). It buys an
oversold bounce and sells it fast: enter when a symbol's close falls 2% under its
12-bar EMA, exit at +3% take profit, -1.5% stop loss, or after 24 bars. Long only,
no leverage, at most 7 positions, each one fifth of equity.

Dev backtest on the kit's window (136 hourly bars, Oct 29 - Nov 3 2026): net PnL
+217 USDC (+2.2%), 29 trades, max drawdown 3.0%, against buy-and-hold at -869
USDC and the best house baseline (MACD-CCI) at -20 USDC. Positive in both halves
of the window. The final window is fresh data, so treat those numbers as a
sanity check, not a promise.

Run it with the kit's grader: `node cli/makefun.mjs grade-local --kit <kit> --bot . --driver process`.
