const mongoose = require("mongoose")
const {Schema} = mongoose;

const CurrencySchema = new mongoose.Schema({
    code:{
        type:String,
        require:true,
    },
    name:{ 
        type:String,
        require:true,
    },
    note:{
        type:String,
    },
    partName:{
        type:String,
        require:true
    }
},{ timestamps:true });

const Currency = mongoose.model("Currency",CurrencySchema);

module.exports = Currency