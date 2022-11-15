const mongoose = require("mongoose")
const {Schema} = mongoose;

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    phoneNO:{
        type:String,
        unique:true,
        require:true,
    },
    address:{
        type:String,
    },
    status:{
        type:Boolean,
    },
    AUTH:{
        isAdmin:{
            type:Boolean,
        },
        isSubAdmin:[],
        agent:{
            code:{
                type:String,
            },
            name:{
                type:String,
            },
            note:{
                type:String,
            }
        },
        distributer:{
            code:{
                type:String,
            },
            name:{
                type:String,
            },
            agentId:{
                type:String,
            }
        },
        client:{
            code:{
                type:String,
            },
            clintName:{
                type:String,
            },
            email:{
                type:String,
            },
            distributerId:{
                type:String,
            },
            phoneNO:{
                type:String,
            },
            address:{
                type:String,
            },
            status:{
                type:Boolean,
            },
            statusType:{
                type:String,
            },   
            cardType:{
                type:String,
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
            }
        }
        
    }    
},{ timestamps:true });

const User = mongoose.model("User",UserSchema);

module.exports = User