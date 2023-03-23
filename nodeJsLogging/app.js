const express = require("express");
const myLogger = require("./middlewares/log");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(router);

const data = [
    {id:1,name:"Bmw"},
    {id:2,name:"Mercedes"}
]

router.get("/",(req,res)=>{
    myLogger.InfoLogger(`Request path => ${req.path}`);
    res.send(data);
});

router.post("/create",(req,res)=>{
    const car = {id:Date.now(),name:"test"};
    myLogger.InfoLogger(`Request path => ${req.path} || body => [ { id:${car.id}, name:${car.name} } ]`);
    try {
        
        throw new Error("Belirlenemeyen bir hata");
        data.push(car);

        res.send(car)
    } catch (error) {
        myLogger.ErrorLogger(`Error => ${error}`);
    }
    
})

app.listen('3000',console.log("Server running at: http://127.0.0.1:3000"));


