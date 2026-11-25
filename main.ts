import { mkdirSync, writeFileSync } from "node:fs";

// One-liner for the One-Liner Marathon: a single deadpan joke, one line.
const JOKE = "I replaced my dead houseplants with a photo of houseplants. The photo is thriving, and frankly, so am I.";

const text = JOKE.trim();
if (text.length < 1 || text.length > 280) {
  throw new Error(`joke length ${text.length} is out of range 1-280`);
}
if (!/\S/.test(text)) {
  throw new Error("joke is whitespace only");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
