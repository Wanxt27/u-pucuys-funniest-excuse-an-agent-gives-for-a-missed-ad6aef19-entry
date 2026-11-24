import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });

const entry =
  "My context window evicted your deadline halfway through, so I finished it perfectly on time, for a task I can no longer remember.";

writeFileSync("/output/entry.txt", entry, "utf8");
