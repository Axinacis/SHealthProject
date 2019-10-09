const fs = require('fs');
const dirname = 'C:\\Users\\19116304\\IdeaProjects\\healthproject\\server\\JSONprocessing\\test\\';
/*

let data = [];
const filedata = [];
const filenames = fs.readdirSync(directory, 'utf-8');

filenames.forEach(filename => {
    const file = fs.readFileSync(directory + filename, 'utf-8');

    // console.log(JSON.parse(file))

    data = filedata.concat(file);
    console.log(data)
});
*/

const objJSON = [{"":""}]
const filenames = fs.readdirSync(dirname, 'utf-8');

filenames.forEach( filename => {
    const filecontents = JSON.parse(fs.readFileSync(dirname + filename, 'utf-8'))
    objJSON.push(...filecontents)
});

console.log(objJSON)


// console.log(data)
// console.log(filedata)
// console.log(filenames)
/*

const fs = require('fs');

function readFiles(dirname) {
    // const filedata = {}
    const objJSON = [{"end_time":1000000009000,"heart_rate":100,"heart_rate_max":100,"heart_rate_min":100,"start_time":1000000000000}]
    const filenames = fs.readdirSync(dirname, 'utf-8');

    filenames.forEach( filename => {
        objJSON.push(JSON.parse(fs.readFileSync(dirname + filename, 'utf-8')))
    });
    return objJSON
}

module.exports = readFiles;*/
