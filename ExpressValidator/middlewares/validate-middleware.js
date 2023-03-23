const { body, param, query } = require("express-validator");

const validateUser = () =>{
    return [body('name').notEmpty({ignore_whitespace:false}).withMessage("Name is not null"),
            body('password').notEmpty({ignore_whitespace:false}).withMessage("Password is not null")
            .isLength({min:4,max:10}).withMessage("Password length min:4 max:10").
            custom((value,{req})=>{
                console.log(location);
                if(value=="pass"){
                    throw new Error('Password is not equal to pass');
                }
                return true;
            }).withMessage('Password is not equal to pass')
    ]
}

const validateGetUserId = () =>{
    return [param('userid').isLength({min:1,max:2}).withMessage("user id length min:1 max:2").isInt({ignore_whitespace:false}).withMessage("Id is integer")
    ]
}

const validateQuery = () =>{
    return [query('number').notEmpty({ignore_whitespace:false}).withMessage('Number is not null'),
    ]
}

module.exports = {
    validateUser,
    validateGetUserId,
    validateQuery
}