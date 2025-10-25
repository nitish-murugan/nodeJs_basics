function delayFn(time){
    return new Promise((resolve)=>{setTimeout(resolve,time)});
}

console.log("Starting the program");
delayFn(2000).then(()=>{console.log("After promise");
});
console.log("End of the program");


function divideNum(a,b){
    return new Promise((re, rej)=>{
        if(b===0){
            rej("Cannot divide any number by zero");
        } else{
            re(a/b);
        }
    })
}

divideNum(10,0).then((result)=>{console.log(`The answer is ${result}`)}).catch((err)=>{console.log(`The error is ${err}`)});