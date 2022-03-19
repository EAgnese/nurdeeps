const express = require('express');
const router = express.Router();
const controller_games = require("../controllers/games_controller")

router.post("/", controller_games.add_game)
router.get("/", controller_games.select_games)
router.get("/:id", controller_games.select_game_by_id)

module.exports = router