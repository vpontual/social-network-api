// Get routes to return all thoughts
route.get("/thoughts", getAllThoughts);
// GET routes to return a single thought
route.get("/thoughts/:id", getSingleThought);
// POST routes for thoughts
route.post("/thoughts", createThought);
// PUT routes for thoughts
route.put("/thoughts/:id", updateThought);
// DELETE routes for thoughts
route.delete("/thoughts/:id", deleteThought);
