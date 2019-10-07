const fs = require('fs');

function readFiles(dirname) {
    const filedata = {}
    const filenames = fs.readdirSync(dirname, 'utf-8');

    filenames.forEach( filename => {
        filedata[filename] = JSON.parse(fs.readFileSync(dirname + filename, 'utf-8'))
    });
    return filedata
}

module.exports = readFiles;