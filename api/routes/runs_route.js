const express = require('express');
const router = express.Router();
const controller_runs = require("../controllers/runs_controller")

router.post("/", controller_runs.add_run);
router.get("/", controller_runs.select_runs);
router.get("/:id", controller_runs.select_run_by_id);
router.get("/user/:user", controller_runs.select_runs_by_user);
router.get("/platform/:plat", controller_runs.select_runs_by_plat);
router.get("/category/:cat", controller_runs.select_runs_by_cat);
router.put("/:id/edit", controller_runs.update_run);

module.exports = router
