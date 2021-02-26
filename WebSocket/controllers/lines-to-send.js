const LineToSend = require("../models").LineToSend;

module.exports = {
  api: function (req, res) {
    LineToSend.findAll({
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
    LineToSend.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    }).then((lines) => {
      res.render("lines-to-send/index", { lines });
    });
  },
  create: function (req, res) {
    LineToSend.create(
      {
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
    res.render("lines-to-send/new");
  },
  edit: function (req, res) {
    LineToSend.findByPk(req.params.id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    }).then(function (line) {
      res.render("lines-to-send/edit", { line });
    });
  },
  update: function (req, res) {
    LineToSend.findByPk(req.params.id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    }).then((lineToSend) => {
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
