const express = require('express');
const app = express();
const httpserver = require('http').createServer(app);
const io = require('socket.io')(httpserver);

var buses = [];

io.on('connection',async(socket)=>{
    await socket.on('user',async(data)=>{
        console.log(data);
    })
})

const PORT = process.env.PORT || 7860 ;
httpserver.listen(PORT,()=>console.log(`Server running at PORT:${PORT}`));