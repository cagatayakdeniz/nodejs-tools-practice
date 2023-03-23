module.exports = (req,res,next)=>{
    if(req.query.name=="index"){
        console.log("index middle running");
    }
    next();
}