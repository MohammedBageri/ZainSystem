const accountRepository  = require('../repository/account.repository.js');
const bcrypt = require("bcryptjs")

class AccountService{
    async createAccount(account){
        return await accountRepository.createAccount(account);
    }

    async getAccount(){
        return await  accountRepository.getAccount();
    }
    async getAccountById(accountId){
        return await  accountRepository.getAccountById(accountId);
    }
    async deleteAccount(accountId) {
        return await accountRepository.deleteAccount(accountId);
    }

    async updateAccount(account) {
        return await accountRepository.updateAccount(account);
    }
}
 
module.exports = new AccountService();