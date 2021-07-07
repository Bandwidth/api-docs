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

const { exec } = require("child_process");
const fs = require("fs")
var path = require('path')

try {
  const arrayOfFiles = fs.readdirSync("../code-snippets")
  arrayOfFiles.forEach (product => {
    const operationFiles = fs.readdirSync("../code-snippets/" + product)
    operationFiles.forEach (operation => {
      const sampleFileArray = fs.readdirSync("../code-snippets/" + product + "/" + operation)
      // console.log(sampleFileArray)
      sampleFileArray.forEach(file => {
        if (path.extname(file) == ".js"){
          // console.log(file)
          exec(`node ../code-snippets/${product}/${operation}/${file}`, (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`);
              return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
          });
        }
      })
    })
  });
} catch(e) {
  console.log(e)
}

// const glob = require("glob");
//
// var getDirectories = function (src, callback) {
//   glob(src + '/**/*', callback);
// };
//
// const fileArray = getDirectories('../code-snippets', function (err, res) {
//   if (err) {
//     console.log('Error', err);
//   }
// });
//
// try {
//   fileArray.forEach (file => {
//     console.log(file)
//   })
// } catch(e) {
//     console.log(e)
// }
