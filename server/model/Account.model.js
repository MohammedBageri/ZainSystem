const mongoose = require("mongoose")
const {Schema} = mongoose;

const AccountSchema = new mongoose.Schema({
    code:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    type:{
        type:String,
        require:true,
    },
    parent:{
        type:String,
    },
    credit:{
        type:Number,
        require:true,
    },
    debit:{
        type:Number,
        require:true,
    },
    description:{
        type:String
    },
    currencyId:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
},{ timestamps:true });
 
const Account = mongoose.model("Account",AccountSchema);

module.exports = Account