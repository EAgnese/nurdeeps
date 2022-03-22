const express = require('express');
const router = express.Router();
const controller_suggestions = require("../controllers/suggestions_controller")

router.post("/", controller_suggestions.add_suggestion);
router.get("/", controller_suggestions.select_suggestions);
router.get("/:id", controller_suggestions.select_suggestion_by_id);
router.put("/:id/edit", controller_suggestions.update_suggestion);

module.exports = router