const express = require("express");
const app = express();
const router = express.Router();
const testMiddle = require("./middlewares/test-middle");
const indexMiddle = require("./middlewares/index-middle");
const merhabaMiddle = require("./middlewares/merhaba-middle");

app.use(express.json());
app.use(router);

router.get('/', indexMiddle,(req,res)=>{
    res.send("Index");
});

router.get('/merhaba', merhabaMiddle,(req,res)=>{
    res.send("Merhaba");
});

router.get('/test', testMiddle,(req,res)=>{
    res.send("Test");
});

app.listen(5000,()=>{
    console.log("Server running at: http://localhost:5000");
})