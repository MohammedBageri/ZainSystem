const mongoose = require("mongoose")
const {Schema} = mongoose;

const CurrencyValueSchema = new mongoose.Schema({
    currencyID:{
        type:String,
        require:true,
    },
    value:{
        type:Number,
        require:true,
    },
    saling:{
        type:Number,
        require:true,
    },
    buying:{
        type:Number,
        require:true,
    }
},{ timestamps:true });

const CurrencyValue = mongoose.model("CurrencyValue",CurrencyValueSchema);

module.exports = CurrencyValue