const express = require('express');
const app = express();
const path = require('path');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/getjson',(req,res)=>{
    res.json([{id:1,name:"Cagatay"},{id:2,name:"Ayaz"}])
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/user',(req,res)=>{
    res.sendFile(__dirname + '/user.html');
})

app.get('/profile',(req,res)=>{
    res.sendFile(__dirname + '/profile.html');
})

app.get('/test',(req,res)=>{
    res.redirect('/user');
})

app.post('/deneme',(req,res)=>{
    res.send('Post Request');
})

app.put('/deneme',(req,res)=>{
    res.send('Put Request');
})

app.delete('/deneme',(req,res)=>{
    res.send('Delete Request');
})

app.listen(3000,()=>{
    console.log("Server running at : http://localhost:3000");
})