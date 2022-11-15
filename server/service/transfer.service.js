const transferRepository  = require('../repository/transfer.repository.js');
const bcrypt = require("bcryptjs")

class TransferService{
    async createTransfer(transfer){
        return await transferRepository.createTransfer(transfer);
    }

    async getTransfer(){
        return await  transferRepository.getTransfer();
    }
    async getTransferById(transferId){
        return await  transferRepository.getTransferById(transferId);
    }
    async deleteTransfer(transferId) {
        return await transferRepository.deleteTransfer(transferId);
    }

    async updateTransfer(transfer) {
        return await transferRepository.updateTransfer(transfer);
    }
}
 
module.exports = new TransferService();