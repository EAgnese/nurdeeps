var express = require('express');
var router = express.Router();
var controller_games = require("../controllers/games_controller")

router.get("/", controller_games.create_game)


