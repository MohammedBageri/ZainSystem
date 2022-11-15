const mongoose = require("mongoose")
const {Schema} = mongoose;

const MerchantsGroupSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
    userId:{
        type:String,
        require:true,
    },
    
},{ timestamps:true });

const MerchantsGroup = mongoose.model("MerchantsGroup",MerchantsGroupSchema);

module.exports = MerchantsGroup