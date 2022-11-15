const currencyService  = require('../service/currency.service.js');

class CurrencyController{
    async createCurrency(currency){
        console.log(currency)
        return await currencyService.createCurrency(currency)
    }
 
    async getCurrency(){
        return await currencyService.getCurrency()
    }
    async getCurrencyById(currencyId){
        return await currencyService.getCurrencyById(currencyId)
    }
    async deleteCurrency(currencyId) {
        return await currencyService.deleteCurrency(currencyId);
    }
    async updateCurrency(curerency) {
        return await currencyService.updateCurrency(curerency);
    }
}

module.exports = new CurrencyController();