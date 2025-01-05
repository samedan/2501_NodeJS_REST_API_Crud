import { v4 as uuidv4 } from "uuid";

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

// POST New User
export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  res.send(`User with the name ${user.firstName} added to the DBB`);
};

// GET All Users
export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

// GET One User
export const getUser = (req, res) => {
  let id = req.params.id;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

// DELETE User
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with id: ${id} deleted from DBB`);
};

// UPDATE User
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const userToBeUpdated = users.find((user) => user.id === id);
  if (firstName) {
    userToBeUpdated.firstName = firstName;
  }
  if (lastName) {
    userToBeUpdated.lastName = lastName;
  }
  if (age) {
    userToBeUpdated.age = age;
  }
  res.send(userToBeUpdated);
};
