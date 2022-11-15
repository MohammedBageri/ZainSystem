const currencyValueController = require('../controller/currencyValue.controller.js.js')
const express = require("express")

const router = express.Router();

router.post("/create",(req,res)=>{
    currencyValueController.createCurrencyValue(req.body).then(data => res.json(data))
});
router.get("/",(req,res)=>{
    currencyValueController.getCurrencyValue().then(data => res.json(data))
});
router.get("/:currencyValueId",(req,res)=>{
    currencyValueController.getCurrencyValueById(req.params.currencyValueId).then(data => res.json(data))
});
router.delete("/:currencyId",(req,res)=>{
    currencyValueController.deleteCurrencyValue(req.params.currencyId).then(data => res.json(data));
});
router.put("/:currencyId",(req,res)=>{
    currencyValueController.updateCurrencyValue(req).then(data => res.json(data));
});

module.exports = router;