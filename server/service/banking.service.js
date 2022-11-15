const bankingRepository  = require('../repository/banking.repository.js');
const bcrypt = require("bcryptjs")

class BankingService{
    async createBanking(banking){
        return await bankingRepository.createBanking(banking);
    }

    async getBanking(){
        return await  bankingRepository.getBanking();
    }
    async getBankingById(bankingId){
        return await  bankingRepository.getBankingById(bankingId);
    }
    async deleteBanking(bankingId) {
        return await bankingRepository.deleteBanking(bankingId);
    }

    async updateBanking(banking) {
        return await bankingRepository.updateBanking(banking);
    }
}
 
module.exports = new BankingService();