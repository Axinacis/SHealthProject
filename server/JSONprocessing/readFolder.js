const fs = require('fs');

const readFolder = (dirname, onFileContent, onError) => {
    fs.readdir(dirname, (err, filenames) => {
        if (err) {
            onError(err);
            return
        }

        filenames.forEach(filename => {
            fs.readFile(dirname + filename, 'utf-8', function (err, content) {
                if (err) {
                    onError(err);
                    return
                }
                onFileContent(filename, content)
            })
        })
    })
};

module.exports = readFolder;