//WHEN I open API GET routes in Insomnia for users and thoughts
//THEN the data for each of these routes is displayed in a formatted JSON

// GET routes for users
route.get("/users", getAllUsers);

// GET routes for thoughts
route.get("/thoughts", getAllThoughts);

//WHEN I test API POST, PUT, and DELETE routes in Insomnia
//THEN I am able to successfully create, update, and delete users and thoughts in my database

// POST, PUT, and DELETE routes for users
route.post("/users", createUser);
route.put("/users/:id", updateUser);
route.delete("/users/:id", deleteUser);

// POST, PUT, and DELETE routes for thoughts
route.post("/thoughts", createThought);
route.put("/thoughts/:id", updateThought);
route.delete("/thoughts/:id", deleteThought);

//WHEN I test API POST and DELETE routes in Insomnia
//THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

// POST and DELETE routes for adding and removing friends
route.post("/users/:userId/friends/:friendId", addFriend);
route.delete("/users/:userId/friends/:friendId", removeFriend);

// POST and DELETE routes for reactions
route.post("/reactions", addReaction);
route.delete("/reactions/:reactionId", removeReaction);
