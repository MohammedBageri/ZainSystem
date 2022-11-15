const merchantsGroupService  = require('../service/merchantsGroup.service.js');

class MerchantsGroupController{
    async createMerchantsGroup(merchantsGroup){
        return await merchantsGroupService.createMerchantsGroup(merchantsGroup)
    }

    async getMerchantsGroup(){
        return await merchantsGroupService.getMerchantsGroup()
    }
    async getMerchantsGroupById(merchantsGroupId){
        return await merchantsGroupService.getMerchantsGroupById(merchantsGroupId)
    }
    async deleteMerchantsGroup(merchantsGroupId) {
        return await merchantsGroupService.deleteMerchantsGroup(merchantsGroupId);
    }
    async updateMerchantsGroup(merchantsGroup) {
        return await merchantsGroupService.updateMerchantsGroup(merchantsGroup);
    }
}

module.exports = new MerchantsGroupController();