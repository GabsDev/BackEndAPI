const express = require("express");
let LinesToSendController = require("../controllers/lines-to-send");

let router = express.Router();

router.route("/lines-to-send/api").get(LinesToSendController.api);

router
  .route("/lines-to-send")
  .get(LinesToSendController.index)
  .post(LinesToSendController.create);

router.get("/lines-to-send/new", LinesToSendController.new);

router.get("/lines-to-send/:id/edit", LinesToSendController.edit);

router.route("/lines-to-send/:id").put(LinesToSendController.update);

module.exports = router;
