import { Router } from "express";
import { list, addUser, removeUser } from "./controller.js";
const router = Router();

router.get("/", (req, res) => {
  res.send(list());
});

router.get("/:id", ({ params: { id } }, res) => {
  res.send(list(id));
});

export default router;
