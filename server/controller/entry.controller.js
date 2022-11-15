const entryService  = require('../service/entry.service.js');

class EntryController{
    async createEntry(entry){
        return await entryService.createEntry(entry)
    }

    async getEntry(){
        return await entryService.getEntry()
    }
    async getEntryById(entryId){
        console.log(entryId)
        return await entryService.getEntryById(entryId)
    }
    async deleteEntry(entryId) {
        return await entryService.deleteEntry(entryId);
    }
    async updateEntry(entry) {
        return await entryService.updateEntry(entry);
    }
}

module.exports = new EntryController();