const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// GET, POST routes for users
router.route("/").get(getAllUsers).post(createUser);

// GET, PUT, and DELETE routes for a single user
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

// POST and DELETE routes for a user's friend list
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
