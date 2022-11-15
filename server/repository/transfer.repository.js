const Transfer = require("../model/Transfer.model.js")

class TransferRepository {

    async createTransfer(transfer){
        let data ={}
        try {
            data = await Transfer.create(transfer);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async getTransfer() {
        const transfer = await Transfer.find();
        console.log('transfer:::', transfer);
        return transfer;
    }
    async getTransferById(transferId) {
        const transfer = await Transfer.findById({_id: transferId});
        console.log('transfer:::', transfer);
        return transfer;
    }
    async deleteTransfer(transferId) {
        let data = {};
        try {
            data = await Transfer.deleteOne({transferId});
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
    
    async updateTransfer(transfer) {
        let data = {};
        try {
            data = await Transfer.updateOne(transfer);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }
}

module.exports = new TransferRepository();