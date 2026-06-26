export function fetchProducts(req, res) {
  res
    .status(200)
    .json({ success: true, message: "products fetch successfully" });
}
