const fs = require('fs');
const readFolder = require('./readFolder');

const data = {};

readFolder('C:\\Users\\19116304\\IdeaProjects\\healthproject\\server\\JSONprocessing\\test\\', async (filename, content) => {
    data[filename] = await JSON.parse(content);
    // console.log(data)
}, e => {
    throw e
});


/*fs.writeFile('test.txt', JSON.stringify(data), 'utf-8', error => {
    if (error) throw error;
    console.log('Data saved to test file')
});*/


/*

.then(data => {
    fs.writeFile('test.txt', JSON.stringify(data), 'utf-8', error => {
        if (error) throw error;
        console.log('Data saved to test file')
    })
*/
