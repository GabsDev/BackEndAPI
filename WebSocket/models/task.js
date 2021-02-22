"use strict";
const socket = require("../realtime/client");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {}

  Task.associate = function (models) {
    Task.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    });

    Task.belongsToMany(models.Category, {
      through: "TaskCategories",
      as: "categories",
      foreignKey: "categoryId",
    });
  };
  Task.afterCreate(function (task, options) {
    socket.emit("new_task", task);
  });

  Task.init(
    {
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
