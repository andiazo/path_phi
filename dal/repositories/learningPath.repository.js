const BaseRepository = require("./base.repository");

class LearningPathRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "LearningPath");
    }
}

module.exports = LearningPathRepository;