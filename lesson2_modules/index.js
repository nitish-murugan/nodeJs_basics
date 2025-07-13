const moduleObj1 = require("./modulesExport")
try{
    var result = moduleObj1.div(12,0);
}catch(error){
    console.log(error.message);
}

console.log(moduleObj1.mul(10,9));

var name = "Nitish";
console.log(`Hello ${name}`);