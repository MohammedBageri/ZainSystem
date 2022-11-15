const currencyRepository  = require('../repository/currency.repository.js');
const bcrypt = require("bcryptjs")

class CurrencyService{
    async createCurrency(currency){
        return await currencyRepository.createCurrency(currency);
    }
 
    async getCurrency(){
        return await  currencyRepository.getCurrency();
    }
    async getCurrencyById(currencyId){
        return await  currencyRepository.getCurrencyById(currencyId);
    }
    async deleteCurrency(currencyId) {
        return await currencyRepository.deleteCurrency(currencyId);
    }

    async updateCurrency(curerency) {
        return await currencyRepository.updateCurrency(curerency);
    }
}
 
module.exports = new CurrencyService();