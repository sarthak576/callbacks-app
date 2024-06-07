const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "test.txt");

// Write a file
fs.writeFile(filePath, "Hello, world!")
  .then(() => {
    console.log("File written successfully.");
    return fs.readFile(filePath, "utf8");
  })
  .then((data) => {
    console.log("File content:", data);
    return fs.unlink(filePath);
  })
  .then(() => {
    console.log("File deleted successfully.");
  })
  .catch((err) => {
    console.error("Error:", err);
  });
