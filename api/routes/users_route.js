const express = require('express');
const router = express.Router();
const controller_users = require("../controllers/users_controller")

router.post("/", controller_users.add_user);
router.get("/", controller_users.select_users);
router.get("/:id", controller_users.select_user_by_id);
router.get("/name/:name", controller_users.select_user_by_name);
router.get("/access/:access", controller_users.select_users_by_access);
router.put("/:id/edit", controller_users.update_user);
router.delete("/:id/remove", controller_users.remove_user);

module.exports = router