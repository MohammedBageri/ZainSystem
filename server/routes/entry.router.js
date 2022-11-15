const entryController = require('../controller/entry.controller.js')
const express = require("express")

const router = express.Router();

router.post("/create",(req,res)=>{
    entryController.createEntry(req).then(data => res.json(data))
});
router.get("/",(req,res)=>{
    entryController.getEntry().then(data => res.json(data))
}); 
router.get("/:entryId",(req,res)=>{
    entryController.getEntryById(req.params.entryId).then(data => res.json(data))
});
router.delete("/:entryId",(req,res)=>{
    entryController.deleteEntry(req.params.entryId).then(data => res.json(data))
});
router.put("/:entryId",(req,res)=>{
    entryController.updateEntry(req).then(data => res.json(data))
});
 
module.exports = router;