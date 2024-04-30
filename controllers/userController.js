const User = require("../models/User");
const Thought = require("../models/Thought");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .populate("thoughts")
      .populate("friends")
      .select("-__v");
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId })
      .populate("thoughts")
      .populate("friends")
      .select("-__v");

    if (!user) {
      return res.status(404).json({ message: "No user found with that ID" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update an existing user
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "No user found with that ID" });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a user (and associated thoughts)
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.params.userId });

    if (!deletedUser) {
      return res.status(404).json({ message: "No user found with that ID" });
    }

    // Remove the user's thoughts
    await Thought.deleteMany({ username: deletedUser.username });

    res.json({ message: "User and associated thoughts deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Add a friend to a user's friend list
const addFriend = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "No user found with that ID" });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Remove a friend from a user's friend list
const removeFriend = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "No user found with that ID" });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
};
