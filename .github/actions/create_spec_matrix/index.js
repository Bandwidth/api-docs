const core = require('@actions/core');

try {
    let changedFiles = process.env.CHANGED_FILES.split(' ');
    let matrix = "{\"include\": [";
    changedFiles.forEach(file => {
        if (file.startsWith("site/specs-source/")) {
            var n = file.lastIndexOf('/');
            matrix += "{\"specs\": \"";
            matrix += file.substring(n + 1);
            matrix += "\"}, ";
        }
    });
    matrix = matrix.slice(0, -2);
    matrix += "]}";
    core.setOutput("matrix", matrix);
} catch (error) {
    core.setFailed(error.message);
}