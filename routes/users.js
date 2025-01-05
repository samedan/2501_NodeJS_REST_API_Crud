import express from "express";

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// @ GET /users
router.get("/", getUsers);

// @ GET /users/:id
router.get("/:id", getUser);

// @ POST /users
router.post("/", createUser);

// @ DELETE /users/:id
router.delete("/:id", deleteUser);

// @ PATCH /users/:id
router.patch("/:id", updateUser);

export default router;
