const merchantController = require('../controller/merchant.controller.js')
const express = require("express")

const router = express.Router();

router.post("/create",(req,res)=>{
    merchantController.createMerchant(req.body).then(data => res.json(data))
});
router.get("/",(req,res)=>{
    merchantController.getMerchant().then(data => res.json(data))
}); 
router.get("/:merchantId",(req,res)=>{
    merchantController.getMerchantById(req.params.merchantId).then(data => res.json(data))
});
router.delete("/:merchantId",(req,res)=>{
    merchantController.deleteMerchant(req.params.id).then(data => res.json(data))
});
router.put("/:merchantId",(req,res)=>{
    merchantController.updateMerchant(req.body).then(data => res.json(data))
});

module.exports = router;