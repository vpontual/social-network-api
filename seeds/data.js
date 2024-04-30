const mongoose = require("mongoose");

const userData = [
  {
    _id: new mongoose.Types.ObjectId("507f1f77bcf86cd799439011"),
    username: "johndoe",
    email: "johndoe@aol.com",
    thoughts: ["607f1f77bcf86cd799439011"],
    friends: ["507f1f77bcf86cd799439012"],
  },
  {
    _id: new mongoose.Types.ObjectId("507f1f77bcf86cd799439012"),
    username: "janedoe",
    email: "jane10@earthlink.com",
    thoughts: ["607f1f77bcf86cd799439012"],
    friends: ["507f1f77bcf86cd799439011"],
  },
  {
    _id: new mongoose.Types.ObjectId("507f1f77bcf86cd799439013"),
    username: "tomsmith",
    email: "stom@yahoo.com",
    thoughts: ["607f1f77bcf86cd799439013"],
    friends: [],
  },
];

const thoughtData = [
  {
    _id: new mongoose.Types.ObjectId("607f1f77bcf86cd799439011"),
    thoughtText: "This is my first thought!",
    username: "johndoe",
    reactions: [
      {
        reactionBody: "Great thought!",
        username: "janedoe",
        // reactionId: new mongoose.Types.ObjectId(),
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId("607f1f77bcf86cd799439012"),
    thoughtText: "Hello, world!",
    username: "janedoe",
    reactions: [
      {
        reactionBody: "Hello!",
        username: "johndoe",
        // reactionId: new mongoose.Types.ObjectId(),
      },
      {
        reactionBody: "I don't get it.",
        username: "tomsmith",
        // reactionId: new mongoose.Types.ObjectId(),
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId("607f1f77bcf86cd799439013"),
    thoughtText: "Why did the chicken cross the road?",
    username: "tomsmith",
    reactions: [
      {
        reactionBody: "I don't get it.",
        username: "janedoe",
        // reactionId: new mongoose.Types.ObjectId(),
      },
    ],
  },
];

module.exports = { userData, thoughtData };
