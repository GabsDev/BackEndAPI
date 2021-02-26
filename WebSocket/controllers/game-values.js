const GameValue = require("../models").GameValue;

module.exports = {
  api: function (req, res) {
    GameValue.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  index: function (req, res) {
    GameValue.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    }).then((lines) => {
      res.render("game-value/index", { lines });
    });
  },
  create: function (req, res) {
    GameValue.create(
      {
        g8: req.body.g8,
        g8bridge: req.body.g8bridge,
        setValue: req.body.setValue,
        sid: req.body.sid,
        IdGame: req.body.IdGame,
        leg: req.body.leg,
        pid: req.body.pid,
        VisitorOdds: req.body.VisitorOdds,
        HomeOdds: req.body.HomeOdds,
        TotalOver: req.body.TotalOver,
        OverOdds: req.body.OverOdds,
        UnderOdds: req.body.UnderOdds,
        VisitorSpread: req.body.VisitorSpread,
        VisitorSpreadOdds: req.body.VisitorSpreadOdds,
        HomeSpread: req.body.HomeSpread,
        HomeSpreadOdds: req.body.HomeSpreadOdds,
        VisitorSpecialOdds: req.body.VisitorSpecialOdds,
      },
      {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      }
    )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  new: function (req, res) {
    res.render("game-value/new");
  },
  edit: function (req, res) {
    GameValue.findByPk(req.params.id).then(function (line) {
      res.render("game-value/edit", { line });
    });
  },
  update: function (req, res) {
    GameValue.findByPk(req.params.id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    }).then((lineToSend) => {
      lineToSend.g8 = req.body.g8;
      lineToSend.g8bridge = req.body.g8bridge;
      lineToSend.setValue = req.body.setValue;
      lineToSend.sid = req.body.sid;
      lineToSend.IdGame = req.body.IdGame;
      lineToSend.leg = req.body.leg;
      lineToSend.pid = req.body.pid;
      lineToSend.VisitorOdds = req.body.VisitorOdds;
      lineToSend.HomeOdds = req.body.HomeOdds;
      lineToSend.TotalOver = req.body.TotalOver;
      lineToSend.OverOdds = req.body.OverOdds;
      lineToSend.UnderOdds = req.body.UnderOdds;
      lineToSend.VisitorSpread = req.body.VisitorSpread;
      lineToSend.VisitorSpreadOdds = req.body.VisitorSpreadOdds;
      lineToSend.HomeSpread = req.body.HomeSpread;
      lineToSend.HomeSpreadOdds = req.body.HomeSpreadOdds;
      lineToSend.VisitorSpecialOdds = req.body.VisitorSpecialOdds;

      lineToSend
        .save({
          attributes: { exclude: ["createdAt", "updatedAt"] },
        })
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
          res.json(err);
        });
    });
  },
};
