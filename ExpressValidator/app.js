const express = require("express");
const app = express();
const router = express.Router();
const validateMiddleware = require("./middlewares/validate-middleware")
const {  validationResult } = require("express-validator");

app.use(express.json());
app.use(router);

router.post("/createUser", validateMiddleware.validateUser() ,(req,res)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        res.send(req.body);
    }else{
        res.send(errors);
    }
});

router.get("/user/:userid", validateMiddleware.validateGetUserId(),(req,res)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        res.send(req.body);
    }else{
        res.send(errors);
    }
});

router.get("/car", validateMiddleware.validateQuery(),(req,res)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        res.send(req.body);
    }else{
        res.send(errors);
    }
});

app.listen(3000,console.log("Server running at: http://127.0.0.1:3000/"));