const mongoose = require("mongoose")
const {Schema} = mongoose;

const TransferSchema = new mongoose.Schema({
    TransferAmount:{
        type:Number,
        require:true,
    },
    currencyId:{
        type:String,
        require:true,
    },
    type:{
        type:String,
        require:true,
    },
    remittanceAuthority:{
        type:String,
        require:true,
    },
    accountId:{
        type:String,
        require:true,
    },
    beneficiary:{
        type:String,
        require:true,
    },
    sender:{
        type:String,
        require:true,
    },
    userId:{
        type:String,
        require:true
    },
    note:{
        type:String
    },
    exchangeOrSupply:{
        bondNo:{
            type:String
        },
        NumberOfRemittanceVoucher:{
            type:String
        },
    },
    captureAndExport:{
        expressNumber:{
            type:String
        },
        commission:{
            type:String
        },
        remittanceSource:{
            type:String
        },
        senderPhone:{
            type:String
        },
        beneficiaryPhone:{
            type:String
        },
    }
},{ timestamps:true });

const Transfer = mongoose.model("Transfer",TransferSchema);

module.exports = Transfer