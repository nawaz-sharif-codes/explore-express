import express from "express";
import dotenv from "dotenv";
import { LoggerMiddleware } from "./middlewares/logger.middleware.js";
import UserRouter from "./routes/user.route.js";
import SubscriptionRouter from "./routes/subscription.route.js";
import OrderRouter from "./routes/order.route.js";
import ProductRouter from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(LoggerMiddleware);
app.use("/user", UserRouter);
app.use("/subscription", SubscriptionRouter);
app.use("/order", OrderRouter);
app.use("/products", ProductRouter);

const PORT = Number(process.env.PORT) || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server is up and running on the PORT ${PORT}`);
});

server.on("error", (error) => {
  console.log("Error occured while server initialization ", error);
});

// app.get("/fetchUser", (req, res) => {
//   return res
//     .status(200)
//     .json({ success: true, data: { id: "1", name: "nawaz sharif" } });
// });

// app.post("/createUser", (req, res) => {
//   const { email, contactNumber } = req.body;
//   res.status(201).json({ success: true, data: { email, contactNumber } });
// });

// app.patch("/patchUser", (req, res) => {
//   const updatedFields = Object.keys(req.body);
//   res.status(200).json({ success: true, updatedFields });
// });

// app.put("/putUser", (req, res) => {
//   const updatedFields = Object.keys(req.body);
//   res.status(200).json({ success: true, updatedFields });
// });

// app.delete("/deleteUser", (req, res) => {
//   res.status(200).json({ success: true, message: "User deleted successfully" });
// });

// app.get("/user/:id/email/:email", (req, res) => {
//   const { id, email } = req.params;
//   res.status(200).json({ success: true, data: { id, email } });
// });

// app.get("/order", (req, res) => {
//   res.status(200).json({ success: true, data: Object.values(req.query) });
// });
