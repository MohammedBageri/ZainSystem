const userService  = require('../service/user.service.js');

class UserController{
    async createUser(user){
        return await userService.createUser(user)
    }

    async getUser(){
        return await userService.getUser()
    }
    async getUserByType(){
        return await userService.getUserByType()
    }
    async getUserById(userId){
        return await userService.getUserById(userId)
    }
    async deleteUser(userId) {
        return await userService.deleteUser(userId);
    }
    async updateUser(user) {
        return await userService.updateUser(user);
    }
    async login(user){
        console.log(user)
        return await userService.login(user)
    }
} 

module.exports = new UserController();