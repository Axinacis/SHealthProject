const fs = require('fs');

const data = fs.readFile('./test/testFile.json', 'utf-8', ()=>{});

console.log(data);

fs.writeFile('test.txt', data, 'utf-8', error => {
    if (error) throw error;
    console.log('Data saved to test file')
});

