const Bond = require("../model/Bond.model.js")
const jwt = require("jsonwebtoken");
const accountRepository  = require('../repository/account.repository.js');

class BondRepository {

    async createBond(bond){
        let data ={}
        // const token = bond.headers.authorization.split(' ')[1]
        // if(!token){
        //     console.log('Error::');
        //     return 'error'
        // }
        // const decodedToken = jwt.verify(token,process.env.JWT );
        try {
            data = await Bond.create({
                bondsNumber:bond.body.bondsNumber,
                accountId:bond.body.accountId,
                transferAccountId:bond.body.transferAccountId,
                type:bond.body.type,
                total:bond.body.total,
                currencyId:bond.body.currencyId,
                currencyValue:bond.body.currencyValue,
                note:bond.body.note,
                entryId:bond.params.entryId,
                userId:"test"
            });
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async createBondEntry(bond){
        let data ={}
        try{
            data = await Bond.create(bond)
        }catch(err){
            console.log('er',err)
        }
        console.log('aaaass:::::',data)
        return data;
    }

    async getBond() {
        const bond = await Bond.find();
        console.log('bond:::', bond);
        return bond;
    }
    async getBondById(bondId) {
        const bond = await Bond.findById({_id: bondId});
        console.log('bond:::', bond);
        return bond;
    }
    async deleteBond(bondId) {
        let data = {};
        try {
            data = await Bond.deleteOne({bondId});
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
    
    async updateBond(bond) {
        let data = {};
        // const token = bond.headers.authorization.split(' ')[1]
        // if(!token){
        //     console.log('Error::');
        //     return 'error'
        // }
        // const decodedToken = jwt.verify(token,process.env.JWT );
        try {
            data = await Bond.updateOne({_id:bond.params.bondId},{$set:{
                bondsNumber:bond.body.bondsNumber,
                accountId:bond.body.accountId,
                transferAccountId:bond.body.transferAccountId,
                type:bond.body.type,
                total:bond.body.total,
                currencyId:bond.body.currencyId,
                currencyValue:bond.body.currencyValue,
                note:bond.body.note,
                userId:'test',
            }});
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updateBondTotal(entryID,credit,debit,credit1,debit1) {
        let data = {};
        const Total = credit - debit
        const account = {}
        try {
            console.log(Total)
            data = await Bond.updateOne({entryId:entryID},{$set:{total:Total}});
            data = await Bond.find({entryId:entryID})
            account = accountRepository.updateCridetAndDipetAccount(data[0].accountId,credit,debit)
            account = accountRepository.updateCridetAndDipetAccount(data[0].transferAccountId,credit1,debit1)
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }
}

module.exports = new BondRepository();