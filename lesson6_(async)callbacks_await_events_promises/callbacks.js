const fs = require('fs');
function a(name, callbackFn){
    console.log(name);
    callbackFn();
}

function b(){
    console.log("Hello from Node JS");
}

a("Nitish", b);

fs.readFile("input.txt", 'utf-8', (err,value)=>{
    if(err){
        console.log("Error occured while reading file");
        return;
    }
    var data = value.toUpperCase();
    fs.writeFile("outfile.txt", data, (err)=>{
        if(err){
            console.log("Error occured while writing file");
            return;
        }
        console.log("Written successfully");
        fs.readFile("outfile.txt", 'utf-8', (err,data)=>{
            if(err){
                console.log("Error occurred while reading data");
                return;
            }
            console.log(data);
            
        })
    })
})