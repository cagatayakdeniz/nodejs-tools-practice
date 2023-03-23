const express = require('express');
const app = express();
app.set('view engine','ejs');

const router = require('./router/router');

app.use(router);

app.listen(3000,()=>{
    console.log("Server running at: http://localhost:3000");
});