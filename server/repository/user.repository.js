const cli = require("nodemon/lib/cli");
const User = require("../model/User.model.js")
const accountRepository  = require('../repository/account.repository.js');


class UserRepository {

    async createUser(user){
        let data ={}
        const account={}
        console.log(user)
        try {
            data = await User.create({
                username:user.username,
                password:user.password,
                phoneNO:user.phoneNO,
                address:user.address,
                status:user.status,
                AUTH:{
                    isAdmin:false,
                    isSubAdmin:[],
                    agent:{
                        code:"",
                        name:"",
                        note:""
                      },
                      distributer:{
                        code:"",
                        name:"",
                        agentId:""
                      },
                      
                    client:{
                        code:"",
                        clintName:"",
                        email:"",
                        distributerId:"",
                        phoneNO:"",
                        address:"",
                        status:false,
                        statusType:"",
                        cardType:"",
                        cardNO:"",
                        emissionplace:"",
                        emission:"",
                        userId:""
                    },
                }
            });
            account = accountRepository.createUserAccount(data)
            console.log('accUserRe',account)
        } catch(err) {
            console.log('Error::' + err);
        }
        return [data,account];
    }

    async getUser() {
        const user = await User.find();
        console.log('user:::', user);
        return user;
    }
    async getUserById(userId) {
        const user = await User.findById({_id: userId});
        console.log('user:::', user);
        return user;
    }
    async getUserByType() {
        const user = await User.find();
        const client = []
        const agent = []
        const distributer = []
        for(var i in user){
            if(user[i].AUTH.client.clintName){
                client.push(user[i])
            }

            if(user[i].AUTH.agent.name ){
                agent.push(user[i])
            }
            if(user[i].AUTH.distributer.name){
                distributer.push(distributer[i])
            }
        }
        console.log('agent:::', agent);
        return [client,agent,distributer];
    }
    async deleteUser(userId) {
        let data = {};
        try {
            data = await User.findByIdAndDelete(userId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
    
    async updateUser(user) {
        let data = {};
        console.log(user)
        try {
            data = await User.findByIdAndUpdate(user.params.userId,{$set:user.body},{ new:true });
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async login(user) { 
        const auth = await User.findOne({username:user.username});
        // console.log('user:::', auth);
        return auth;
    }
}

module.exports = new UserRepository();