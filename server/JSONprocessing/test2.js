const fs = require('fs');
const directory = 'C:\\Users\\19116304\\IdeaProjects\\healthproject\\server\\JSONprocessing\\test\\';

let data = [];
const filedata = [];
const filenames = fs.readdirSync(directory, 'utf-8');

filenames.forEach(filename => {
    const file = fs.readFileSync(directory + filename, 'utf-8');

    // console.log(JSON.parse(file))

    data = filedata.concat(file);
    console.log(data)
});



// console.log(data)
// console.log(filedata)
// console.log(filenames)

