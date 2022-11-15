const merchantRepository  = require('../repository/merchant.repository.js');
const bcrypt = require("bcryptjs")

class MerchantService{
    async createMerchant(merchant){
        return await merchantRepository.createMerchant(merchant);
    }

    async getMerchant(){
        return await  merchantRepository.getMerchant();
    }
    async getMerchantById(merchantId){
        return await  merchantRepository.getMerchantById(merchantId);
    }
    async deleteMerchant(merchantId) {
        return await merchantRepository.deleteMerchant(merchantId);
    }

    async updateMerchant(merchant) {
        return await merchantRepository.updateMerchant(merchant);
    }
}
 
module.exports = new MerchantService();