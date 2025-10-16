import { describe, expect, test, vi, beforeEach, afterEach } from "vitest";
import { createRequire } from 'module';
import { Readable } from 'stream';

const require = createRequire(import.meta.url);
const { blockReadInEnvFile } = require("../pre-tool-use.cjs");

const testingJSON = {
  "blockRead": {
    "tool_name": "Read", "tool_input": { "file_path": ".env" },
  },
  "blockGrep": {
    "tool_name": "Grep", "tool_input": { "file_path": ".env" }
  },
  "allowRead": {
    "tool_name": "Read", "tool_input": { "file_path": "./sample" }
  },
  "allowGrep": {
    "tool_name": "Grep", "tool_input": { "file_path": "./sample" }
  }
};

describe('blockReadInEnvFile', () => {
  let exitCode;
  let error;
  let processExitSpy;

  beforeEach(() => {
    // Mock process.exit to capture the exit code
    exitCode = null;
    processExitSpy = vi.spyOn(process, 'exit').mockImplementation((code) => {
      exitCode = code;
      throw new Error('process.exit called'); // Stop execution
    });
  });
  afterEach(() => {
    // Restore original process.exit
    processExitSpy.mockRestore();
  });

  test('block read in .env file', async () => {
    const json = testingJSON.blockRead;
    const mockStdin = Readable.from([JSON.stringify(json)]);
    try {
      await blockReadInEnvFile(mockStdin);
    } catch (e) {
      error = e;
    }
    expect(exitCode).toBe(1);
  });
  test('block grep in .env file', async () => {
    const json = testingJSON.blockGrep;
    const mockStdin = Readable.from([JSON.stringify(json)]);
    try {
      await blockReadInEnvFile(mockStdin);
    } catch (e) {
      error = e;
    }
    expect(exitCode).toBe(1);
  });
  test("allow read in non .env file", async () => {
    const json = testingJSON.allowRead;
    const mockStdin = Readable.from([JSON.stringify(json)]);

    try {
      await blockReadInEnvFile(mockStdin);
    } catch (e) {
      error = e;
    }
    expect(exitCode).toBe(0);
  });
  test("allow grep in non .env file", async () => {
    const json = testingJSON.allowGrep;
    const mockStdin = Readable.from([JSON.stringify(json)]);

    try {
      await blockReadInEnvFile(mockStdin);
    } catch (e) {
      error = e;
    }
    expect(exitCode).toBe(0);
  });
});
