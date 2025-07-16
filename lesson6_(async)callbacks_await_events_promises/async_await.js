function delayFn(time){
    return new Promise((resolve)=>{setTimeout(resolve,time)});
}

async function greeting(name){
    await delayFn(2000);
    console.log(`Hello ${name}`);
}

function greeting2(){
    delayFn(2000).then(()=>{console.log("After 2sec")});
    console.log("End");
}

greeting("Nitish");
greeting2();