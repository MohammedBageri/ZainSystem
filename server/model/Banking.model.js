const mongoose = require("mongoose")
const {Schema} = mongoose;

const BankingSchema = new mongoose.Schema({
    bankingNumber:{
        type:Number,
        require:true,
    },
    amount:{
        type:Number,
        require:true,
    },
    type:{
        type:String,
        require:true,
    },
    currencyId:{
        type:String,
        require:true
    },
    currencyValue:{
        type:Number,
        require:true,
    },
    accountId:{
        type:String,
        require:true,
    },
    counterCurrencyId:{
        type:String,
        require:true,
    },
    correspondingAmount:{
        type:Number,
        require:true,
    },
    correspondingAccountId:{
        type:String,
        require:true
    },
    note:{
        type:String,
    },
    branch:{
        type:String
    },
},{ timestamps:true });

const Banking = mongoose.model("Banking",BankingSchema);

module.exports = Banking