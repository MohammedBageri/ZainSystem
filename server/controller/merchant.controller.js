const merchantService  = require('../service/merchant.service.js');

class MerchantController{
    async createMerchant(merchant){
        return await merchantService.createMerchant(merchant)
    }

    async getMerchant(){
        return await merchantService.getMerchant()
    }
    async getMerchantById(merchantId){
        return await merchantService.getMerchantById(merchantId)
    }
    async deleteMerchant(merchantId) {
        return await merchantService.deleteMerchant(merchantId);
    }
    async updateMerchant(merchant) {
        return await merchantService.updateMerchant(merchant);
    }
}

module.exports = new MerchantController();