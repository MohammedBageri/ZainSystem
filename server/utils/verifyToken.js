const jwt = require("jsonwebtoken")
const  Error  = require("./error.js")

// export const verifyToken = (req,res,next) =>{
//     const token = req.cookies.access_token;
//     if(!token) return next(createError(401,"user not authrized"));

//     jwt.verify(token,process.env.JWT,(err,user) =>{
//         if(err) return next(createError(403,"user not authrized"));

//         req.user = user;
//         next()
//     })
// }


// export const verifyUsrt = (req,res,next) =>{
//     verifyToken(req,res, ()=>{
//         if(req.user.id === req.params.id || req.user.isAdmin){
//             next();
//         }else{
//             next(createError(403,"user not authrized"))
//         }
//     });
// };


class Verify{
    verifyToken(req,res,next){
        const token = req.cookies.access_token;
        if(!token) return next(Error.createError(401,"user not authrized"));
    
        jwt.verify(token,process.env.JWT,(err,user) =>{
            if(err) return next(Error.createError(403,"user not authrized"));
    
            req.user = user;
            next()
        })
    };
    verifyUsrt(req,res,next){
        verifyToken(req,res, ()=>{
            if(req.user.id === req.params.id || req.user.isAdmin){
                next();
            }else{
                next(Error.createError(403,"user not authrized"))
            }
        });
    };    
}

module.exports = new Verify();