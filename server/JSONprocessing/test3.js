const fs = require('fs');
const readFiles = require('./readFilesS');

const directory = 'C:\\Users\\19116304\\IdeaProjects\\healthproject\\server\\JSONprocessing\\test\\';

const data = readFiles(directory);
console.log(data);
const out = JSON.stringify(data);
console.log(out);

fs.writeFile('test.txt', out, 'utf-8', error => {
    if (error) throw error;
    console.log('Data saved to test file')
});

