const eventEmitter = require('events');
const eventObj1 = new eventEmitter();

eventObj1.on('greeting',(name)=>{
    console.log(`Hello ${name}`);
})
eventObj1.emit('greeting','Nitish')