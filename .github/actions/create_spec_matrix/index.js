const fs = require('fs');
const core = require('@actions/core');

try {
    let matrix = "{\"include\": [";
    const specslist = fs.readdirSync('./site/specs');
    specslist.forEach(spec => {
        matrix += "{\"specs\": \"";
        matrix += spec;
        matrix += "\"}, ";
    });
    matrix = matrix.slice(0, -2);
    matrix += "]}";
    core.setOutput("matrix", matrix);
} catch (error) {
    core.setFailed(error.message);
}