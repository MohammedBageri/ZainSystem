const Entry = require("../model/Entry.model.js")
const bondRepository  = require('../repository/bond.repository.js');
const accountRepository  = require('../repository/account.repository.js');
const jwt = require("jsonwebtoken");

class EntryRepository {

    async createEntry(entry){
        let data ={} 
        let data1 = {}
        // const token = entry.headers.authorization.split(' ')[1]
        // if(!token){
        //     return 'error'
        // }
        // const decodedToken = jwt.verify(token,process.env.JWT );
        console.log(entry)
        try {
            data = await Entry.create({
                entryNumber: entry.body.entryNumber,
                note: entry.body.note,
                currencyValue: entry.body.currencyValue,
                currencyId: entry.body.currencyId,
            });
            data1 = bondRepository.createBondEntry({
                entryId:data._id,
                accountId:" ",
                transferAccountId:" ",
                type:" ",
                total:0,
                currencyId:entry.body.currencyId,
                currencyValue: entry.body.currencyValue,
                userId:'test'
            })
        } catch(err) {
            console.log('Error::' + err);
        }
        return data1;
    }

    async getEntry() {
        const entry = await Entry.find();
        console.log('entry:::', entry);
        return entry;
    }
    async getEntryById(entryId) {
        const entry = await Entry.findById({_id: entryId});
        console.log('entry:::', entry);
        return entry;
    }
    async deleteEntry(entryId) {
        let data = {};
        try {
            data = await Entry.deleteOne({entryId});
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
    
    async updateEntry(entry) {
        let data = {};
        const account = {}
        const bond = {}
        const newEntryData = {}
        try {
            console.log(entry.body)
                data = await Entry.findById({_id:entry.params.entryId})
                newEntryData = await data.entryDetail.push(entry.body.entryDetail)
                newEntryData.save()
                return newEntryData
            
           bond = bondRepository.updateBondTotal(entry.params.entryId,entry.body.entryDetail[0].cridet,entry.body.entryDetail[0].debit,entry.body.entryDetail[1].cridet,entry.body.entryDetail[1].debit)
        
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }
}

module.exports = new EntryRepository();