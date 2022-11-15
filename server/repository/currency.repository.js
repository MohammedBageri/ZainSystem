const Currency = require("../model/Currency.model.js")

class CurrencyRepository {

    async createCurrency(currency){
        let data ={}
        console.log(currency)
        try {
            data = await Currency.create(currency);
            console.log(data)
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async getCurrency() {
        const currency = await Currency.find();
        return currency;
    }
    async getCurrencyById(currencyId) {
        const currency = await Currency.findOne({_id: currencyId});
        return currency;
    }
    async deleteCurrency(currencyId) {
        let data = {};
        try {
            data = await Currency.findByIdAndDelete(currencyId);
        } catch(err) {
            console.log('Error::' + err);
        }
        // return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
    
    async updateCurrency(currency) {
        let data = {};
        try {
            data = await Currency.findOneAndUpdate(currency.params.currencyId,{$set:currency.body} );
            console.log('Error::' + data);
      
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }
}

module.exports = new CurrencyRepository();