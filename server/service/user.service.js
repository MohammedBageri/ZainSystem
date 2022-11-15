const userRepository = require("../repository/user.repository.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UserService {
  async createUser(user) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);

    const auth = {
      username: user.username,
      password: hash,
      phoneNO: user.phoneNO,
      address: user.address,
      status: user.status,
    };
    return await userRepository.createUser(auth);
  }

  async getUser() {
    return await userRepository.getUser();
  }
  async getUserByType() {
    return await userRepository.getUserByType();
  }
  async getUserById(userId) {
    return await userRepository.getUserById(userId);
  }
  async deleteUser(userId) {
    return await userRepository.deleteUser(userId);
  }

  async updateUser(user) {
    return await userRepository.updateUser(user);
  }

  async login(user) {
    const user1 = await userRepository.login(user);
    console.log("user1::", user1);
    if (!user1) return 404, "user not found";

    const isPassword = await bcrypt.compare(user.password, user1.password);
    if (!isPassword) return 401, "wrong password";

    const token = jwt.sign(
      { id: user1._id, isAdmin: user1.isAdmin },
      process.env.JWT
    );
    console.log("token::", token);

    return [token, user1];
    // return callBack
  }
}

module.exports = new UserService();
