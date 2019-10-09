const readFiles = require('./readFiles');

// const dir = 'C:\\Users\\19116304\\Shealth\\hrtest\\';

function importHealtJSON(dir) {
    const objectArray = readFiles(dir);
    return objectArray
}

module.exports = importHealtJSON;

// const out = JSON.stringify(data);
//
// fs.writeFileSync('test.txt', out, 'utf-8')
// console.log('Data saved to test file')
