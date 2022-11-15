const Client = require("../model/Client.model.js")

class ClientRepository {

    async createClient(client){
        let data ={}
        try {
            data = await Client.create(client);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async getClient() {
        const client = await Client.find();
        console.log('client:::', client);
        return client;
    }
    async getClientById(clientId) {
        const client = await Client.findById({clientId});
        console.log('client:::', client);
        return client;
    }
    async deleteClient(clientId) {
        let data = {};
        try {
            data = await Client.deleteOne({clientId});
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
    
    async updateClient(client) {
        let data = {};
        try {
            data = await Client.updateOne(client);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }
}

module.exports = new ClientRepository();