class UserRepository {
    constructor({ db }) {
        this.db = db;
    }
    getUsers() {
        return this._db.users.findAll();
    }
    createUser(user) {
        return this._db.users.create();
    }
}

module.exports = UserRepository;