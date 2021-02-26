const LineToSend = require("../models").LineToSend;

module.exports = {
  api: function (req, res) {
    LineToSend.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  index: function (req, res) {
    LineToSend.findAll().then((lines) => {
      res.render("lines-to-send/index", { lines });
    });
  },
  create: function (req, res) {
    LineToSend.create({
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
    res.render("lines-to-send/new");
  },
};
