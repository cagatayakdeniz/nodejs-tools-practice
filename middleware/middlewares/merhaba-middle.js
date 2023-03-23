module.exports = (req,res,next)=>{
    if(req.query.old==15){
        console.log("merhaba middle running");
    }
    next();
}