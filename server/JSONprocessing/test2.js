const fs = require('fs');
const readFiles = require('./readFilesAsync');

const directory = 'C:\\Users\\19116304\\IdeaProjects\\healthproject\\server\\JSONprocessing\\test\\';
const data = {}

async function main() {
    await readFiles(directory, function(filename, content) {
        data[filename] = content;
        console.log(data)
    }, function(err) {
        throw err;
    });

    fs.writeFile('test.txt', JSON.stringify(data), 'utf-8', error => {
        if (error) throw error;
        console.log('Data saved to test file')
    });
}

main()

/*
readFiles(directory, function(filename, content) {
    data[filename] = content;
    console.log(data)
}, function(err) {
    throw err;
});

console.log(data)

fs.writeFile('test.txt', JSON.stringify(data), 'utf-8', error => {
    if (error) throw error;
    console.log('Data saved to test file')
});*/

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
