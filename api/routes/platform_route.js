const express = require('express');
const router = express.Router();
const controller_platforms = require("../controllers/platforms_controller")

router.post("/", controller_platforms.add_platform)
router.get("/:id", controller_platforms.select_platform_by_id)
router.put("/:id/edit", controller_platforms.update_platform);

module.exports = router