const fs = require('fs');

function readFiles(dirname) {
    // const filedata = {}
    const objJSON = [{"":""}]
    const filenames = fs.readdirSync(dirname, 'utf-8');

    filenames.forEach( filename => {
        const filecontents = JSON.parse(fs.readFileSync(dirname + filename, 'utf-8'))
        objJSON.push(...filecontents)
    });
    objJSON.shift()
    return objJSON
}

module.exports = readFiles;
