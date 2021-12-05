"use strict";
module.exports = (sequelize, DataTypes) => {
    const LearningPath = sequelize.define(
        "LearningPath",
        {
            teacherId: DataTypes.INTEGER,
            subjectId: DataTypes.INTEGER,
            courseId: DataTypes.INTEGER,
            status: DataTypes.STRING
        },
    );
    LearningPath.associate = function (models) {
        LearningPath.belongsTo(models.Teacher);
        LearningPath.belongsTo(models.Course);
        LearningPath.belongsTo(models.Subject);
        LearningPath.belongsToMany(models.Student, {
            through: "Registration",
            as: "students",
            foreignKey: "learningPathId"
        });
    };
    return LearningPath;
};