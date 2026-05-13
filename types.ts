export interface Signal {
  node: string;
  confidence: number;
  action: "BUY" | "SELL" | "HOLD";
}
