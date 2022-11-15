const mongoose = require("mongoose")
const {Schema} = mongoose;

const MerchantSchema = new mongoose.Schema({
    code:{
        type:String,
        require:true
    },
    merchantsGroupId:{
        type:String,
        require:true,
    },
    Owner:{
        type:String,
    },
    description:{
        type:String,
    },
    phoneNO:{
        type:String,
    },
    address:{
        type:String,
    },
    userId:{
        type:String,
        require:true,
    },
    
},{ timestamps:true });

const Merchant = mongoose.model("Merchant",MerchantSchema);

module.exports = Merchant