function delayFn(time){
    return new Promise((resolve)=>{setTimeout(resolve,time)});
}

console.log("Starting the program");
delayFn(2000).then(()=>{console.log("After promise");
});
console.log("End of the program");


function divideNum(a,b){
    return new Promise((resolve, reject)=>{
        if(b===0){
            reject("Cannot divide any number by zero");
        } else{
            resolve(a/b);
        }
    })
}

divideNum(10,0).then((result)=>{console.log(`The answer is ${result}`)}).catch((err)=>{console.log(`The error is ${err}`)});