const accountController = require('../controller/account.controller.js')
const express = require("express")

const router = express.Router();

router.post("/create",(req,res)=>{
    accountController.createAccount(req).then(data => res.json(data))
});
router.get("/",(req,res)=>{
    accountController.getAccount().then(data => res.json(data))
}); 
router.get("/:accountId",(req,res)=>{
    accountController.getAccountById(req.params.accountId).then(data => res.json(data))
});
router.delete("/:accountId",(req,res)=>{
    accountController.deleteAccount(req.params.accountId).then(data => res.json(data))
});
router.put("/:accountId",(req,res)=>{
    accountController.updateAccount(req).then(data => res.json(data))
});

module.exports = router; 