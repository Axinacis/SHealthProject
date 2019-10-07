const fs = require('fs');
const readFiles = require('./readFilesS');

const directory = 'C:\\Users\\19116304\\Shealth\\hrtest\\';

const data = readFiles(directory);
const out = JSON.stringify(data);

fs.writeFileSync('test.txt', out, 'utf-8')
console.log('Data saved to test file')

