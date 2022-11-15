const clientController = require('../controller/client.controller.js')
const express = require("express")

const router = express.Router();

router.post("/create",(req,res)=>{
    clientController.createClient(req.body).then(data => res.json(data))
});
router.get("/",(req,res)=>{
    clientController.getClient().then(data => res.json(data))
}); 
router.get("/:clientId",(req,res)=>{
    clientController.getClientById(req.params.id).then(data => res.json(data))
});
router.delete("/:clientId",(req,res)=>{
    clientController.deleteClient(req.params.id).then(data => res.json(data))
});
router.put("/:clientId",(req,res)=>{
    clientController.updateClient(req.body).then(data => res.json(data))
});

module.exports = router;