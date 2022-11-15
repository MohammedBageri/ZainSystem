const currencyValueRepository  = require('../repository/currencyValue.repository.js');

class CurrencyValueService{
    async createCurrencyValue(currencyValue){
        return await currencyValueRepository.createCurrencyValue(currencyValue);
    }

    async getCurrencyValue(){
        return await  currencyValueRepository.getCurrencyValue();
    }
    async getCurrencyValueById(curerencyValueId){
        return await  currencyValueRepository.getCurrencyValueById(curerencyValueId);
    }
    async deleteCurrencyValue(curerencyValueId) {
        return await currencyValueRepository.deleteCurrencyValue(curerencyValueId);
    }

    async updateCurrencyValue(currencyValue) {
        return await currencyValueRepository.updateCurrencyValue(currencyValue);
    }
}
 
module.exports = new CurrencyValueService();