/*
validate_code_snippets.js

Validates the language code snippets. This really only checks for proper syntax; API integration tests
that are order dependent will be handled in the SDK repos.
*/
// const { exec } = require("child_process");
//
// exec('ls -la', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.error(`stderr: ${stderr}`);
// });

const fs = require("fs")

try {
  const arrayOfFiles = fs.readdirSync("../code-snippets")
  arrayOfFiles.forEach (element => {
    const snippetFiles = fs.readdirSync("../code-snippets/${element}")
    console.log(snippetFiles)
  });
  console.log(arrayOfFiles)
} catch(e) {
  console.log(e)
}
