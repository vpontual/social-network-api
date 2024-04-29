const Thought = require("../models/Thought");
const User = require("../models/User");

// Get all thoughts
const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find().select("-__v");
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a single thought by ID
const getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.thoughtId }).select(
      "-__v"
    );

    if (!thought) {
      return res.status(404).json({ message: "No thought found with that ID" });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a new thought
const createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);

    // If the request body includes reactions, associate them with the new thought
    if (req.body.reactions && req.body.reactions.length > 0) {
      newThought.reactions = req.body.reactions.map((reaction) => ({
        ...reaction,
        createdAt: new Date(),
      }));
      await newThought.save();
    }

    const updatedUser = await User.findOneAndUpdate(
      { username: req.body.username },
      { $addToSet: { thoughts: newThought._id } },
      { new: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "No user found with that username" });
    }

    res.json(newThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update an existing thought
const updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!updatedThought) {
      return res.status(404).json({ message: "No thought found with that ID" });
    }

    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a thought
const deleteThought = async (req, res) => {
  try {
    const deletedThought = await Thought.findOneAndDelete({
      _id: req.params.thoughtId,
    });

    if (!deletedThought) {
      return res.status(404).json({ message: "No thought found with that ID" });
    }

    // Remove the thought from the associated user's thoughts array
    const updatedUser = await User.findOneAndUpdate(
      { username: deletedThought.username },
      { $pull: { thoughts: req.params.thoughtId } },
      { new: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "No user found with that username" });
    }

    res.json({ message: "Thought deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Add a reaction to a thought
const addReaction = async (req, res) => {
  try {
    const updatedThought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );

    if (!updatedThought) {
      return res.status(404).json({ message: "No thought found with that ID" });
    }

    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Remove a reaction from a thought
const removeReaction = async (req, res) => {
  try {
    const updatedThought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    );

    if (!updatedThought) {
      return res.status(404).json({ message: "No thought found with that ID" });
    }

    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
};
