const BaseService = require("./base.service");
class LearningPathService extends BaseService {
    constructor({ LearningPathBusiness }) {
        super(LearningPathBusiness);
    }
}

module.exports = LearningPathService;