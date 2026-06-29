import { fetchAllProducts } from "../services/product.service.js";

export function fetchProducts(req, res) {
  const products = fetchAllProducts();
  res
    .status(200)
    .json({
      success: true,
      products,
      message: "products fetched successfully",
    });
}
