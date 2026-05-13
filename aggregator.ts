import { Signal } from "./types";

export function aggregateSignals(signals: Signal[]) {
  const confidence =
    signals.reduce((acc, s) => acc + s.confidence, 0) /
    signals.length;

  const buySignals = signals.filter(
    (s) => s.action === "BUY"
  ).length;

  const sellSignals = signals.filter(
    (s) => s.action === "SELL"
  ).length;

  let finalAction: "BUY" | "SELL" | "HOLD" = "HOLD";

  if (buySignals > sellSignals) {
    finalAction = "BUY";
  }

  if (sellSignals > buySignals) {
    finalAction = "SELL";
  }

  return {
    confidence,
    action: finalAction
  };
}
