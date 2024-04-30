// const mongoose = require("mongoose");
// const { User, Thought } = require("../models");
// const { userData, thoughtData } = require("./data");

// mongoose.connect("mongodb://localhost/my-social-network", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const db = require("../config/connection");
const { User, Thought } = require("../models");
const { userData, thoughtData } = require("./data");

const seedDatabase = async () => {
  try {
    await db.once("open", () => {
      console.log("Connection has been established successfully.");
    });
    // Remove existing data from the database
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert seed data for users
    const users = await User.insertMany(userData);
    // console.log("users", users);

    // Get user IDs for seeding thoughts
    // const userIds = users.map((user) => user._id);

    // Modify thoughtData to include user IDs
    // const modifiedThoughtData = thoughtData.map((thought) => ({
    //   ...thought,
    //   username: users.find((user) => user.username === thought.username)._id,
    // }));
    // console.log("modifiedThoughtData", modifiedThoughtData);
    // Insert seed data for thoughts
    await Thought.insertMany(thoughtData);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
};

seedDatabase();
