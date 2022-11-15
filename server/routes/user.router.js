const userController = require('../controller/user.controller.js')
const express = require("express")

const router = express.Router();

router.post("/create",(req,res)=>{
    userController.createUser(req.body).then(data => res.json(data))
});
router.get("/",(req,res)=>{
    userController.getUser().then(data => res.json(data))
}); 
router.get("/type",(req,res)=>{
    userController.getUserByType().then(data => res.json(data))
}); 
router.get("/:userId",(req,res)=>{
    userController.getUserById(req.params.userId).then(data => res.json(data))
});
router.delete("/:userId",(req,res)=>{
    userController.deleteUser(req.params.userId).then(data => res.json(data))
});
router.put("/:userId",(req,res)=>{
    userController.updateUser(req).then(data => res.json(data))
});
// router.post("/login",(req,res)=>{
//     userController.login(req.body).then(data => res.cookie("access_token",data.token,{httpOnly:true}).status(200).json(data.auth))
// })

router.post("/login",(req,res)=>{
    userController.login(req.body).then(data => res.cookie("access_token",data[0],{httpOnly:true,secure:true,sameSite:"none"}).status(200).json(data))
});
// router.post("/login",(req,res)=>{
//     userController.login(req.body).then(data => res.header("access_token",data[0]).status(200).json(data))
// });
 
module.exports = router;