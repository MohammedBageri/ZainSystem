const bondService  = require('../service/bond.service.js');

class BondController{
    async createBond(bond){
        return await bondService.createBond(bond)
    }

    async getBond(){
        return await bondService.getBond()
    }
    async getBondById(bondId){
        return await bondService.getBondById(bondId)
    }
    async deleteBond(bondId) {
        return await bondService.deleteBond(bondId);
    }
    async updateBond(bond) {
        return await bondService.updateBond(bond);
    }
}

module.exports = new BondController();