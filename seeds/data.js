const userData = [
  {
    username: "johndoe",
    email: "johndoe@aol.com",
    friends: [],
  },
  {
    username: "janedoe",
    email: "jane10@earthlink.com",
    friends: [],
  },
  {
    username: "tomsmith",
    email: "stom@yahoo.com",
    friends: [],
  },
];

const thoughtData = [
  {
    thoughtText: "This is my first thought!",
    username: "johndoe",
    reactions: [
      {
        reactionBody: "Great thought!",
        username: "janedoe",
      },
    ],
  },
  {
    thoughtText: "Hello, world!",
    username: "janedoe",
    reactions: [
      {
        reactionBody: "Hello!",
        username: "johndoe",
      },
      {
        reactionBody: "I don't get it.",
        username: "stom",
      },
    ],
  },
  {
    thoughtText: "Why did the chicken cross the road?",
    username: "stom",
    reactions: [
      {
        reactionBody: "I don't get it.",
        username: "janedoe",
      },
    ],
  },
];

module.exports = { userData, thoughtData };
