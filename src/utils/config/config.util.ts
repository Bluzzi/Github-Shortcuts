import { existsSync, mkdirSync } from "fs";
import { join } from "path";

const path = join(__dirname, "../../../", "config");

export const configPath = (): string => {
  if (!existsSync(path)) mkdirSync(path, { recursive: true });

  return path;
};