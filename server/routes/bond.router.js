const bondController = require('../controller/bond.controller.js')
const express = require("express")

const router = express.Router();

router.post("/create/:entryId",(req,res)=>{
    bondController.createBond(req).then(data => res.json(data))
});
router.get("/",(req,res)=>{
    bondController.getBond().then(data => res.json(data))
}); 
router.get("/:bondId",(req,res)=>{
    bondController.getBondById(req.params.bondId).then(data => res.json(data))
});
router.delete("/:bondId",(req,res)=>{
    bondController.deleteBond(req.params.id).then(data => res.json(data))
});
router.put("/:bondId",(req,res)=>{
    bondController.updateBond(req).then(data => res.json(data))
});

module.exports = router;