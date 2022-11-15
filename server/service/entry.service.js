const entryRepository  = require('../repository/entry.repository.js');
const bcrypt = require("bcryptjs")

class EntryService{
    async createEntry(entry){
        return await entryRepository.createEntry(entry);
    }

    async getEntry(){
        return await  entryRepository.getEntry();
    }
    async getEntryById(entryId){
        const Details = await  entryRepository.getEntryById(entryId);
        var cridet=0;
        var debit=0;
        // for(var i in Details){
        //     debit += Details[i].debit
        //     cridet += Details[i].cridet
        // }
        var total = cridet-debit
        return Details
    }
    async deleteEntry(entryId) {
        return await entryRepository.deleteEntry(entryId);
    }

    async updateEntry(entry) {
        return await entryRepository.updateEntry(entry);
    }
}
 
module.exports = new EntryService();