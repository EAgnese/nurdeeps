const express = require('express');
const router = express.Router();
const controller_game_type = require("../controllers/game_types_controller")

router.post("/", controller_game_type.add_game_type)
router.get("/:id", controller_game_type.select_game_type_by_id)

module.exports = router