const mongoose = require("mongoose")
const {Schema} = mongoose;

const BondsSchema = new mongoose.Schema({
    bondsNumber:{
        type:Number,
    },
    accountId:{
        type:String,
        require:true,
    },
    transferAccountId:{
        type:String,
    },
    type:{
        type:String,
        require:true,
    }, 
    total:{
        type:Number,
        require:true,
    },
    currencyId:{
        type:String,
        require:true
    },
    currencyValue:{
        type:Number,
        require:true
    },
    note:{
        type:String,
    },
    entryId:{
        type:String,
        require:true,
        unique:true
    },
    userId:{
        type:String,
        require:true
    },
},{ timestamps:true });

const Bonds = mongoose.model("Bonds",BondsSchema);

module.exports = Bonds