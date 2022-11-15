const clientRepository  = require('../repository/client.repository.js');
const bcrypt = require("bcryptjs")

class ClientService{
    async createClient(client){
        return await clientRepository.createClient(client);
    }

    async getClient(){
        return await  clientRepository.getClient();
    }
    async getClientById(clientId){
        return await  clientRepository.getClientById(clientId);
    }
    async deleteClient(clientId) {
        return await clientRepository.deleteClient(clientId);
    }

    async updateClient(client) {
        return await clientRepository.updateClient(client);
    }
}
 
module.exports = new ClientService();