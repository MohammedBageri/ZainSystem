const mongoose = require("mongoose")
const {Schema} = mongoose;

const entryDetail = new mongoose.Schema({
    cridet:{type:Number},
    debit:{type:Number},
    currencyValue:{type:Number},
    currencyId:{type:String}
})

const EntrySchema = new mongoose.Schema({
    entryNumber:{
        type:Number,
        require:true,
    },
    note:{
        type:String,
    },
    currencyValue:{
        type:Number,
        require:true,  
    },
    currencyId:{
        type:String,
        require:true
    },
    entryDetail:[entryDetail]
},{ timestamps:true });

const Entry = mongoose.model("Entry",EntrySchema);

module.exports = Entry