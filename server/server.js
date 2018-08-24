const express = require ('express')
var Mock = require('mockjs')
const app = express();

//引入模板

app.use('/v2/home/discover', (request, response)=>{
    const data = require('./data/home.js');
    response.json(data);
})



// app.use('/v2/discover', (request, response)=>{
//     const data = require('./data/discover.js');

//     response.json(data);
// })

app.listen('8000', 'localhost', (error)=>{
    if(error){
        console.log('服务器启动失败');
    }else{
        console.log('服务器启动成功');
    }
})

