import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { configPath } from "#/utils/config";

const tokenFile = join(configPath(), "token.txt");

export const getGitHubToken = (): string | null => {
  if (!existsSync(tokenFile)) return null;

  const token = readFileSync(tokenFile, "utf-8");

  return token || null;
};

export const setGitHubToken = (token: string): void => {
  writeFileSync(tokenFile, token);
};