import { afterAll, describe, expect, it } from "vitest";
import { getGitHubToken, setGitHubToken } from "./github-token.util";
import { randomUUID } from "node:crypto";

const defaultContent = getGitHubToken();

describe("github token", () => {
  afterAll(() => {
    if (defaultContent) setGitHubToken(defaultContent);
  });

  it("should be set and get correctly", () => {
    const uuid = randomUUID();

    setGitHubToken(uuid);

    expect(getGitHubToken()).toBe(uuid);
  });

  it("should be return null if token are not defined", () => {
    setGitHubToken("");

    expect(getGitHubToken()).toBeNull();
  });
});