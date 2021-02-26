"use strict";
const socket = require("../realtime/client");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LineToSend extends Model {}

  LineToSend.init(
    {
      u: DataTypes.TEXT,
      p: DataTypes.TEXT,
      action: DataTypes.TEXT,
      sid: DataTypes.INTEGER,
      eid: DataTypes.INTEGER,
      leg: DataTypes.INTEGER,
      pid: DataTypes.INTEGER,
      alt: DataTypes.TEXT,
      lid: DataTypes.TEXT,
      vml: DataTypes.TEXT,
      hml: DataTypes.TEXT,
      ttl: DataTypes.TEXT,
      tov: DataTypes.TEXT,
      tun: DataTypes.TEXT,
      vsd: DataTypes.TEXT,
      vso: DataTypes.TEXT,
      hsd: DataTypes.TEXT,
      hso: DataTypes.TEXT,
      draw: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "LineToSend",
    }
  );
  LineToSend.afterCreate(function (line, options) {
    socket.emit("new_line", line);
  });

  LineToSend.afterSave(function (line, options) {
    socket.emit("update_line", line);
  });
  return LineToSend;
};
