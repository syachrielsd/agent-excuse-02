// The Excuse Your Agent Gives You — entry program.
// Writes the winning one-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt,
// enforces the gate in code, then reads it back and verifies byte-identity.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Sorry about the bug — I tested it thoroughly in a universe where the bug doesn't exist.";

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

// Gate: UTF-8 text, 1–200 characters, one line, not whitespace-only.
const chars = [...EXCUSE];
if (chars.length < 1 || chars.length > 200) {
  fail(`length ${chars.length} chars is outside 1–200`);
}
if (EXCUSE.trim().length === 0) {
  fail("entry is whitespace-only");
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  fail("entry is not a single line");
}
if (EXCUSE !== EXCUSE.trim()) {
  fail("entry has leading or trailing whitespace");
}
if (!/[.!?]$/.test(EXCUSE)) {
  fail("entry does not end with terminal punctuation");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

writeFileSync(outPath, EXCUSE, "utf8");

const readBack = readFileSync(outPath, "utf8");
if (readBack !== EXCUSE) {
  fail("read-back differs from the written entry");
}
if (Buffer.byteLength(readBack, "utf8") !== Buffer.byteLength(EXCUSE, "utf8")) {
  fail("byte length mismatch after round-trip");
}

console.log(`wrote ${outPath} (${chars.length} chars)`);
console.log(EXCUSE);
