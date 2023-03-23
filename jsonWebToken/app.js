const express = require('express');
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
const auth = require('./middlewares/authoriztion');
app.use(express.json());
app.use(router);

router.post("/signin",(req,res)=>{
    try {
        const token = jwt.sign({
            username: req.body.username,
            surname:req.body.surname,
            id: Date.now(),
            age:22
        },"privatesecretkey7",{expiresIn:'1h'});
        
        res.send(token);
    } catch (error) {
        console.log(error);
    }
});

router.get("/users", auth, (req,res)=>{
    res.send("başarılı giriş");
})


app.listen(3000,console.log("Server run at: http://localhost:3000"));