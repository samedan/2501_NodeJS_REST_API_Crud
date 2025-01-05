import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
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

// @ GET /users/:id
router.get("/:id", (req, res) => {
  let id = req.params.id;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

// @ POST /users
router.post("/", (req, res) => {
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  res.send(`User with the name ${user.firstName} added to the DBB`);
});

// @ DELETE /users/:id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with id: ${id} deleted from DBB`);
});

export default router;
