const BaseBusiness = require("./base.business");
const { LearningPath } = require("./models");

class LearningPathBusiness extends BaseBusiness {
    constructor({ LearningPathRepository }) {
        super(LearningPathRepository, LearningPath);
    }
}

module.exports = LearningPathBusiness;