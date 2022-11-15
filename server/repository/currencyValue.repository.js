const CurrencyValue = require("../model/CurrencyValue.model.js")

class CurrencyValueRepository {

    async createCurrencyValue(currencyValue){
        let data ={}
        try {
            data = await CurrencyValue.create(currencyValue);
        } catch(err) {
            console.log('currency:::', err);
        }
        return data;
    }

    async getCurrencyValue() {
        const currencyValue = await CurrencyValue.find();
        console.log('currency:::', currencyValue);
        return currencyValue;
    }
    async getCurrencyValueById(currencyValueId) {
        const currencyValue = await CurrencyValue.findById({_id: currencyValueId});
        console.log('currency:::', currencyValue);
        return currencyValue;
    }
    async deleteCurrencyValue(currencyValueId) {
        let data = {};
        try {
            data = await CurrencyValue.findByIdAndDelete(currencyValueId);
        } catch(err) {
            console.log('currency:::', currencyValue);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
    
    async updateCurrencyValue(currencyValue) {
        let data = {};
        try {
            data = await CurrencyValue.findOneAndUpdate(currencyValue.params.currencyId,{$set:currencyValue.body});
            console.log('currency:::', data);

        } catch(err) {
            console.log('currency:::', err);
        }
        return data;
    }
}

module.exports = new CurrencyValueRepository();