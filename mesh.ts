import { momentumNode } from "../nodes/momentum";
import { structureNode } from "../nodes/structure";
import { macroNode } from "../nodes/macro";
import { codeNode } from "../nodes/code";
import { executionNode } from "../nodes/execution";

import { aggregateSignals } from "./aggregator";

export async function runMesh() {
  const signals = [
    await momentumNode(),
    await structureNode(),
    await macroNode(),
    await codeNode(),
    await executionNode()
  ];

  const result = aggregateSignals(signals);

  return {
    signals,
    result
  };
}
