const bankingController = require('../controller/banking.controller.js')
const express = require("express")

const router = express.Router();

router.post("/create",(req,res)=>{
    bankingController.createBanking(req.body).then(data => res.json(data))
});
router.get("/",(req,res)=>{
    bankingController.getBanking().then(data => res.json(data))
}); 
router.get("/:bankingId",(req,res)=>{
    bankingController.getBankingById(req.params.bankingId).then(data => res.json(data))
});
router.delete("/:bankingId",(req,res)=>{
    bankingController.deleteBanking(req.params.id).then(data => res.json(data))
});
router.put("/:bankingId",(req,res)=>{
    bankingController.updateBanking(req.body).then(data => res.json(data))
});

module.exports = router;