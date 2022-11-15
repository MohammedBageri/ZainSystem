const currencyValueService  = require('../service/currencyValue.service.js');

class CurrencyValueController{
    async createCurrencyValue(currencyValue){
        return await currencyValueService.createCurrencyValue(currencyValue)
    }

    async getCurrencyValue(){
        return await currencyValueService.getCurrencyValue()
    }
    async getCurrencyValueById(currencyValueId){
        return await currencyValueService.getCurrencyValueById(currencyValueId)
    }
    async deleteCurrencyValue(curerencyValueId) {
        return await currencyValueService.deleteCurrencyValue(curerencyValueId);
    }
    async updateCurrencyValue(currencyValue) {
        return await currencyValueService.updateCurrencyValue(currencyValue);
    }
}

module.exports = new CurrencyValueController();