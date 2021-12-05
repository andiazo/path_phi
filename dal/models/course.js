"use strict";
module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define(
        "Course",
        {
            name: DataTypes.STRING,
            status: DataTypes.STRING
        },
    );
    Course.associate = function (models) {
        Course.hasMany(models.LearningPath, {
            foreignKey: "courseId",
            as: "learningPaths"
        });
    };
    return Course;
};