const transferService  = require('../service/transfer.service.js');

class TransferController{
    async createTransfer(transfer){
        return await transferService.createTransfer(transfer)
    }

    async getTransfer(){
        return await transferService.getTransfer()
    }
    async getTransferById(transferId){
        return await transferService.getTransferById(transferId)
    }
    async deleteTransfer(transferId) {
        return await transferService.deleteTransfer(transferId);
    }
    async updateTransfer(transfer) {
        return await transferService.updateTransfer(transfer);
    }
}

module.exports = new TransferController();