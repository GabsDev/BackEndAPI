const express = require("express");
let GameValueController = require("../controllers/game-values");

let router = express.Router();

router.route("/game-value/api").get(GameValueController.api);

router
  .route("/game-value")
  .get(GameValueController.index)
  .post(GameValueController.create);

router.get("/game-value/new", GameValueController.new);

router.get("/game-value/:id/edit", GameValueController.edit);

router.route("/game-value/:id").put(GameValueController.update);

module.exports = router;
