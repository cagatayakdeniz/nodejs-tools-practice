const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    console.log(req.headers);
    if(!req.headers.authorization){
        return res.send("Token yok");
    }
    const token = req.headers.authorization.split(' ')[1];

    try {
        const checkToken = jwt.verify(token,"privatesecretkey7");
        console.log(checkToken);
        next();
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}