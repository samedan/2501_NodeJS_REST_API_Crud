import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Dan",
    lastName: "Pope",
    age: 46,
  },
];

// @ GET /users
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

// @ POST /users
router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`User with the name ${user.firstName} added to the DBB`);
});

export default router;
