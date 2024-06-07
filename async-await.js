const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "test.txt");

async function manageFile() {
  try {
    await fs.writeFile(filePath, "Nameste Duniya!!!");
    console.log("File written successfully.");

    const data = await fs.readFile(filePath, "utf8");
    console.log("File content:", data);

    await fs.unlink(filePath);
    console.log("File deleted successfully.");
  } catch (err) {
    console.error("Error:", err);
  }
}

manageFile();
