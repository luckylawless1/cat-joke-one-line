// The One-Line Cat Joke That Lands — make.fun entry
// Writes a single one-line cat joke (< 200 chars) to /output/entry.txt.
// Node stdlib only. Deterministic: the same joke on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My cat ignores me all day, then at 3am sits on my chest and stares into my soul like a tiny landlord doing an inspection.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
