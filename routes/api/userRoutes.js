// User Routes

// GET routes to return all users
route.get("/users", getAllUsers);
// GET routes to return a single user
route.get("/users/:id", getSingleUser);
// POST routes for users
route.post("/users", createUser);
// PUT routes for users
route.put("/users/:id", updateUser);
// DELETE routes for users
route.delete("/users/:id", deleteUser);

// Friend Routes

//POST routes for a user’s friend list
route.post("/users/:userId/friends/:friendId", addFriend);
//DELETE routes for a user’s friend list
route.delete("/users/:userId/friends/:friendId", removeFriend);
