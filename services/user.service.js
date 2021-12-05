const { toDomainEntity } = require("../domain/mappers");
const { toDbEntity } = require("../dal/mappers");
class UserService {
    constructor({ UserRepository }) {
        this._userRepository = UserRepository;
    }
    async getUsers() {
        const users = await this._userRepository.getUsers();
        console.log("holaprimermundo");
        return users.map(toDomainEntity);
    }
    async createUser(user) {
        user = toDbEntity(user);
        const createdUser = await this._userRepository.createUser(user);
        console.log("holaprimermundo");
        return createdUser;
    }
}

module.exports = UserService;