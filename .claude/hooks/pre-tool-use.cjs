async function blockReadInEnvFile(stdin = process.stdin) {
  let readBlock = '';
  for await (const block of stdin) {
    readBlock += block;
  }

  const data = JSON.parse(readBlock);
  const commands = ["read", "grep"];
  const toolName = commands.includes(data.tool_name.toLowerCase());

  const filePath = data.tool_input?.file_path || data.tool_input?.path || "";
  const envFilePath = filePath.includes(".env");

  if (toolName && envFilePath) {
    console.error("You cannot reading the .env file.");
    process.exit(1);
  } else {
    process.exit(0);
  }
}

if (require.main === module) {
  blockReadInEnvFile();
}

module.exports = { blockReadInEnvFile };