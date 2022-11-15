const Banking = require("../model/Banking.model.js")

class BankingRepository {

    async createBanking(banking){
        let data ={}
        try {
            data = await Banking.create(banking);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async getBanking() {
        const banking = await Banking.find();
        console.log('Banking:::', banking);
        return banking;
    }
    async getBankingById(bankingId) {
        const banking = await Banking.findById({_id: bankingId});
        console.log('Banking:::', banking);
        return banking;
    }
    async deleteBanking(bankingId) {
        let data = {};
        try {
            data = await Banking.deleteOne({bankingId});
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
    
    async updateBanking(banking) {
        let data = {};
        try {
            data = await Banking.updateOne(banking);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }
}

module.exports = new BankingRepository();