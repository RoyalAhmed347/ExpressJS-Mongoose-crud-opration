const express = require("express");

const router = express.Router();
const {
  handleGetAllUser,
  handleCreateUser,
  handleGetUserById,
  handleUpdateUserById,
  handleUDeleteUserById,
} = require("../controllers/user");

router.route("/").get(handleGetAllUser).post(handleCreateUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleUDeleteUserById);

module.exports = router;
