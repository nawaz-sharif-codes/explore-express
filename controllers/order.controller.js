import { fetchOrderById } from "../services/order.service.js";

export function fetchOrder(req, res) {
  const data = fetchOrderById(req.params.id);
  res.status(200).json({
    success: true,
    data,
    message: "order fetched successfully",
  });
}
