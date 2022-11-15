const bankingService  = require('../service/banking.service.js');

class BankingController{
    async createBanking(banking){
        return await bankingService.createBanking(banking)
    }

    async getBanking(){
        return await bankingService.getBanking()
    }
    async getBankingById(bankingId){
        console.log("bankingId",bankingId)
        return await bankingService.getBankingById(bankingId)
    }
    async deleteBanking(bankingId) {
        return await bankingService.deleteBanking(bankingId);
    }
    async updateBanking(banking) {
        return await bankingService.updateBanking(banking);
    }
}

module.exports = new BankingController();