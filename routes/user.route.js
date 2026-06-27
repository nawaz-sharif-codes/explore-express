import { Router } from "express";
import { fetchUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/:id", fetchUser);

export default router;
