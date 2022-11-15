const bondRepository  = require('../repository/bond.repository.js');
const bcrypt = require("bcryptjs")

class BondService{
    async createBond(bond){
        return await bondRepository.createBond(bond);
    }

    async getBond(){
        return await  bondRepository.getBond();
    }
    async getBondById(bondId){
        return await  bondRepository.getBondById(bondId);
    }
    async deleteBond(bondId) {
        return await bondRepository.deleteBond(bondId);
    }

    async updateBond(bond) {
        return await bondRepository.updateBond(bond);
    }
}
 
module.exports = new BondService();