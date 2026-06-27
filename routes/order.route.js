import { Router } from "express";
import { fetchOrder } from "../controllers/order.controller.js";

const router = Router();

router.get("/:id", fetchOrder);

export default router;
