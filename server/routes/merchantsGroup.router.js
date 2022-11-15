const merchantsGroupController = require('../controller/merchantsGroup.controller.js')
const express = require("express")

const router = express.Router();

router.post("/create",(req,res)=>{
    merchantsGroupController.createMerchantsGroup(req.body).then(data => res.json(data))
});
router.get("/",(req,res)=>{
    merchantsGroupController.getMerchantsGroup().then(data => res.json(data))
}); 
router.get("/:merchantsGroupId",(req,res)=>{
    merchantsGroupController.getMerchantsGroupById(req.params.merchantsGroupId).then(data => res.json(data))
});
router.delete("/:merchantsGroupId",(req,res)=>{
    merchantsGroupController.deleteMerchantsGroup(req.params.id).then(data => res.json(data))
});
router.put("/:merchantsGroupId",(req,res)=>{
    merchantsGroupController.updateMerchantsGroup(req.body).then(data => res.json(data))
});

module.exports = router;