const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
  thought: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "thought",
  },
  text: {
    type: String,
  },
});

const Reaction = mongoose.model("Reaction", reactionSchema);

module.exports = Reaction;
