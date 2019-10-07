const fs = require('fs');

const data = fs.readFileSync('./test.txt', 'utf-8');
console.log(data)
const dataJSON = JSON.parse(data)
console.log(dataJSON)

/*
console.log(data);

fs.writeFile('test.txt', data, 'utf-8', error => {
    if (error) throw error;
    console.log('Data saved to test file')
});

*/
