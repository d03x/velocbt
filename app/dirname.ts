import { dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";

export const __dirname = dirname(fileURLToPath(pathToFileURL(__filename)));

console.log(__dirname);
