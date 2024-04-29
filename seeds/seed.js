const mongoose = require("mongoose");
const { User, Thought } = require("../models");
const { userData, thoughtData } = require("./data");

mongoose.connect("mongodb://localhost/my-social-network", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDatabase = async () => {
  try {
    // Remove existing data from the database
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert seed data for users
    const users = await User.insertMany(userData);

    // Get user IDs for seeding thoughts
    const userIds = users.map((user) => user._id);

    // Modify thoughtData to include user IDs
    const modifiedThoughtData = thoughtData.map((thought) => ({
      ...thought,
      username: users.find((user) => user.username === thought.username)._id,
    }));

    // Insert seed data for thoughts
    await Thought.insertMany(modifiedThoughtData);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
};

seedDatabase();