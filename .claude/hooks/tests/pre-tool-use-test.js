import { describe, test } from "vitest";
import { blockReadInEnvFile } from "../pre-tool-use";

const testingJSON = [
  {
    "tool_name": "Read", "tool_input": { "file_path": ".env" }
  },
  {
    "tool_name": "Grep", "tool_input": { "file_path": ".env" }
  },
  {
    "tool_name": "Write", "tool_input": { "file_path": "./sample" }
  }
];

describe('blockReadInEnvFile', () => {
  test('block read in .env file', async () => {

  });
  test('block grep in .env file', async () => {

  });
  test("allow read in non .env file", () => {

  });
  test("allow grep in non .env file", () => {

  });
});