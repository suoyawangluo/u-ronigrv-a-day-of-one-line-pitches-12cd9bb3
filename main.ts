// One-line pitch entry for make.fun's "A Day of One-Line Pitches" bounty.
// The program writes exactly one sentence (176 characters) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const PITCH =
  "Tell an AI agent the app idea you have been carrying around, and watch it come back as something real you can tap — you describe it, it builds it, and trying costs you nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");

// Output check: the gate accepts UTF-8 text of 1 to 240 characters, not only white space.
const written = readFileSync("/output/entry.txt", "utf8");
const chars = [...written].length;
if (chars < 1 || chars > 240 || written.trim() === "") {
  console.error(`Gate check failed: ${chars} characters`);
  process.exit(1);
}
console.log(`Wrote ${chars} characters to /output/entry.txt`);
