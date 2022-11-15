const clientService  = require('../service/client.service.js');

class ClientController{
    async createClient(client){
        return await clientService.createClient(client)
    }

    async getClient(){
        return await clientService.getClient()
    }
    async getClientById(clientId){
        return await clientService.getClientById(clientId)
    }
    async deleteClient(clientId) {
        return await clientService.deleteClient(clientId);
    }
    async updateClient(client) {
        return await clientService.updateClient(client);
    }
}

module.exports = new ClientController();