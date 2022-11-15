const merchantsGroupRepository  = require('../repository/merchantsGroup.repository.js');
const bcrypt = require("bcryptjs")

class MerchantsGroupService{
    async createMerchantsGroup(merchantsGroup){
        return await merchantsGroupRepository.createMerchantsGroup(merchantsGroup);
    }

    async getMerchantsGroup(){
        return await  merchantsGroupRepository.getMerchantsGroup();
    }
    async getMerchantsGroupById(merchantsGroupId){
        return await  merchantsGroupRepository.getMerchantsGroupById(merchantsGroupId);
    }
    async deleteMerchantsGroup(merchantsGroupId) {
        return await merchantsGroupRepository.deleteMerchantsGroup(merchantsGroupId);
    }

    async updateMerchantsGroup(merchantsGroup) {
        return await merchantsGroupRepository.updateMerchantsGroup(merchantsGroup);
    }
}
 
module.exports = new MerchantsGroupService();