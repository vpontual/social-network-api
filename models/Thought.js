const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  reaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "reaction",
  },
  text: {
    type: String,
  },
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
