const accountService  = require('../service/account.service.js');

class AccountController{
    async createAccount(account){
        // console.log(account)
        return await accountService.createAccount(account)
    }

    async getAccount(){
        return await accountService.getAccount()
    } 
    async getAccountById(accountId){
        console.log('con',accountId)
        return await accountService.getAccountById(accountId)
    }
    async deleteAccount(accountId) {
        return await accountService.deleteAccount(accountId);
    }
    async updateAccount(account) {
        return await accountService.updateAccount(account);
    }
}

module.exports = new AccountController();