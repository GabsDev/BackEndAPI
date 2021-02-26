const GameValue = require("../models").GameValue;

module.exports = {
  api: function (req, res) {
    GameValue.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  index: function (req, res) {
    GameValue.findAll().then((lines) => {
      res.render("game-value/index", { lines });
    });
  },
  create: function (req, res) {
    GameValue.create({
      u: req.body.u,
      p: req.body.p,
      action: req.body.action,
      sid: req.body.sid,
      eid: req.body.eid,
      leg: req.body.leg,
      pid: req.body.pid,
      alt: req.body.alt,
      lid: req.body.lid,
      vml: req.body.vml,
      hml: req.body.hml,
      ttl: req.body.ttl,
      tov: req.body.tov,
      tun: req.body.tun,
      vsd: req.body.vsd,
      vso: req.body.vso,
      hsd: req.body.hsd,
      hso: req.body.hso,
      draw: req.body.draw,
    })
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
    GameValue.findByPk(req.params.id).then((lineToSend) => {
      lineToSend.u = req.body.u;
      lineToSend.p = req.body.p;
      lineToSend.action = req.body.action;
      lineToSend.sid = req.body.sid;
      lineToSend.eid = req.body.eid;
      lineToSend.leg = req.body.leg;
      lineToSend.pid = req.body.pid;
      lineToSend.alt = req.body.alt;
      lineToSend.lid = req.body.lid;
      lineToSend.vml = req.body.vml;
      lineToSend.hml = req.body.hml;
      lineToSend.ttl = req.body.ttl;
      lineToSend.tov = req.body.tov;
      lineToSend.tun = req.body.tun;
      lineToSend.vsd = req.body.vsd;
      lineToSend.vso = req.body.vso;
      lineToSend.hsd = req.body.hsd;
      lineToSend.hso = req.body.hso;
      lineToSend.draw = req.body.draw;
      lineToSend
        .save()
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
