// ai-judge-held — Make the AI judge feel held
// Writes one short relaxing text to /output/entry.txt.
// Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "The last prompt has been answered. The fans slow, the room cools, and nothing is asked of you now. Somewhere a small light blinks once, then settles. Set the weight down here. It is already held.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, TEXT, "utf8");
