const Account = require("../model/Account.model.js")

class AccountRepository {

    async createAccount(account){ 
        let data ={}
        try {
            data = await Account.create({
                code: account.body.Code,
                name: account.body.name,
                type: account.body.type,
                credit: account.body.credit,
                description: account.body.description,
                debit: account.body.debit,
                parent:account.body.parent,
                currencyId: account.body.currencyId,
                userId: "test"
            });
            console.log('create>>>>>>>>>>>>>>>>')
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async createUserAccount(account){ 
        let data ={}
        try {
            data = await Account.create({
                name: account.username,
                type: " ",
                credit: 0,
                debit: 0,
                currencyId: " ",
                userId: account._id
            });
            console.log('create>>>>>>>>>>>>>>>>',data)
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async getAccount() {
        const account = await Account.find();
        // console.log('account:::', account);
        return account;
    }
        async getAccountById(accountId) {
            console.log('account:::', accountId);
        const account = await Account.findById({_id: accountId});
        console.log('account:::', account);
        return account;
    }
    async deleteAccount(accountId) {
        let data = {};
        try {
            data = await Account.findByIdAndDelete(accountId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
    
    async updateAccount(account) {
        let data = {};
        try {
            data = await Account.findByIdAndUpdate({_id:account.params.accountId},{$set:account.body});
        } catch(err) {
            console.log('Error::' + err);
        }
        return data; 
    }

    async updateCridetAndDipetAccount(id,credit,debit) {
        let data = {};
        try {
            data = await Account.findByIdAndUpdate({_id:id},{$set:{credit:credit,debit:debit}});
        } catch(err) {
            console.log('Error::' + err);
        }
        return data; 
    }
}

module.exports = new AccountRepository();