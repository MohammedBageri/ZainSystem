const transferController = require('../controller/transfer.controller.js')
const express = require("express")

const router = express.Router();

router.post("/create",(req,res)=>{
    transferController.createTransfer(req.body).then(data => res.json(data))
});
router.get("/",(req,res)=>{
    transferController.getTransfer().then(data => res.json(data))
}); 
router.get("/:transferId",(req,res)=>{
    transferController.getTransferById(req.params.transferId).then(data => res.json(data))
});
router.delete("/:transferId",(req,res)=>{
    transferController.deleteTransfer(req.params.id).then(data => res.json(data))
});
router.put("/:transferId",(req,res)=>{
    transferController.updateTransfer(req.body).then(data => res.json(data))
});

module.exports = router;