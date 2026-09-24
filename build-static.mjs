import { cpSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
mkdirSync(dist, { recursive: true });
for (const file of ["app.js", "model.js", "styles.css", "index.html", "favicon.svg"]) cpSync(join(root, file), join(dist, file));
console.log(`Built static site to ${dist}`);
