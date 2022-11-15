const currencyController = require('../controller/currency.controller.js')
const express = require("express")

const router = express.Router();

router.post("/create",(req,res)=>{
    currencyController.createCurrency(req.body).then(data => res.json(data))
});
router.get("/",(req,res)=>{
    currencyController.getCurrency().then(data => res.json(data))
}); 
router.get("/:currencyId",(req,res)=>{
    currencyController.getCurrencyById(req.params.currencyId).then(data => res.json(data))
});
router.delete("/:currencyId",(req,res)=>{
    currencyController.deleteCurrency(req.params.currencyId).then(data => res.json(data))
});
router.put("/:currencyId",(req,res)=>{
    currencyController.updateCurrency(req).then(data => res.json(data))
});
 
module.exports = router;