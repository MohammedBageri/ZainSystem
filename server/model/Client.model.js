const mongoose = require("mongoose")
const {Schema} = mongoose;

const ClientSchema = new mongoose.Schema({
    code:{
        type:String,
        require:true,
        unique:true,
    },
    clintName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
    },
    distributerId:{
        type:String,
        require:true
    },
    phoneNO:{
        type:String,
    },
    address:{
        type:String,
    },
    status:{
        type:Boolean,
        default:false,
    },
    statusType:{
        type:String,
    },   
    cardType:{
        type:String,
        require:true
    },
    cardNO:{
        type:String,
    },
    emissionplace:{
        type:String,
    },
    emission:{
        type:Date
    },
    userId:{
        type:String,
        require:true,
    }
},{ timestamps:true });

const Client = mongoose.model("Client",ClientSchema);

module.exports = Client