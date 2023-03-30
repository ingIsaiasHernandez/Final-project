const Users = require("../models/user.model");

class UserServices {
    static async create(newUser) {
        try {
            const userCreated = await Users.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, updatedInfo) {
        try {
            const updatedUser = await Users.update(updatedInfo, {
                where: { id }
            });
            return updatedUser
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;