const fs = require('fs');
const path = require('path')

const pathName = path.join(__dirname,"data");
if(!fs.existsSync(pathName)){
    fs.mkdirSync(pathName);
    console.log("Folder created successfully");
}

const fileName = path.join(pathName, "sample.txt");
fs.writeFileSync(fileName, "Hello world from NodeJS");
console.log("File created successfully");

var fileData = fs.readFileSync(fileName, 'utf-8');
console.log(fileData);

fs.appendFile(fileName, "\nAdding other line", (err)=>{
    if(err) throw err;
    console.log("Append successfully");
});