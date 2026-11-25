// SPDX-License-Identifier: MIT
// Fix Human Sleep: Funniest Patch Note
// Writes exactly one line of patch notes to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local runs).
// Standard library only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Fixed: human sleep now recharges to 100% overnight; previously it stopped at 12% and a headache.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
