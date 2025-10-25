const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const PORT = 3000;

const app = express();
const httpServer = http.createServer(app);
const io = socketIo(httpServer);

app.use(express.static('public'));

const Users = new Set();
io.on('connection', (socket)=>{
    console.log('User is connected');

    socket.on('join', (userName)=>{ //Listening the username from the client side
        console.log(`Connected user id ${userName}`);
        Users.add(userName);
        socket.userName = userName;
        io.emit('joinedUser', userName); //Inform all users that this username is joined
        io.emit('userList', Array.from(Users)); //Sending the updated user list
    });

    socket.on('chatMessage', (message)=>{
        io.emit('chatMessage', message);
    })

    socket.on('disconnect', ()=>{
        console.log("An user is disconected");
        Users.forEach(user=>{
            if(user===socket.userName){
                Users.delete(user);
                io.emit('userLeft', user);
                io.emit('userList', Array.from(Users)); //Sending the updated user list
            }
        })
    })

});

httpServer.listen(PORT, ()=>{
    console.log(`Server is listening on the port ${PORT}`);
})