const MerchantsGroup = require("../model/MerchantsGroup.model.js")

class MerchantsGroupRepository {

    async createMerchantsGroup(merchantsGroup){
        let data ={}
        try {
            data = await MerchantsGroup.create(merchantsGroup);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async getMerchantsGroup() {
        const merchantsGroup = await MerchantsGroup.find();
        console.log('merchantsGroup:::', merchantsGroup);
        return merchantsGroup;
    }
    async getMerchantsGroupById(merchantsGroupId) {
        const merchantsGroup = await MerchantsGroup.findById({_id: merchantsGroupId});
        console.log('merchantsGroup:::', merchantsGroup);
        return merchantsGroup;
    }
    async deleteMerchantsGroup(merchantsGroupId) {
        let data = {};
        try {
            data = await MerchantsGroup.deleteOne({merchantsGroupId});
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
    
    async updateMerchantsGroup(merchantsGroup) {
        let data = {};
        try {
            data = await MerchantsGroup.updateOne(merchantsGroup);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }
}

module.exports = new MerchantsGroupRepository();