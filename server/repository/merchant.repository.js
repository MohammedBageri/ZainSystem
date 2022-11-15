const Merchant = require("../model/Merchant.model.js")

class MerchantRepository {

    async createMerchant(merchant){
        let data ={}
        try {
            data = await Merchant.create(merchant);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async getMerchant() {
        const merchant = await Merchant.find();
        console.log('merchant:::', merchant);
        return merchant;
    }
    async getMerchantById(merchantId) {
        const merchant = await Merchant.findById({_id: merchantId});
        console.log('merchant:::', merchant);
        return merchant;
    }
    async deleteMerchant(merchantId) {
        let data = {};
        try {
            data = await Merchant.deleteOne({merchantId});
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
    
    async updateMerchant(merchant) {
        let data = {};
        try {
            data = await Merchant.updateOne(merchant);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }
}

module.exports = new MerchantRepository();