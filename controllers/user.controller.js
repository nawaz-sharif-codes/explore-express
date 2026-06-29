import { fetchUserById } from "../services/user.service.js";

export function fetchUser(req, res) {
  const id = req.params.id;
  const data = fetchUserById(id);
  res
    .status(200)
    .json({ success: true, data, message: "user fetched successfully" });
}
