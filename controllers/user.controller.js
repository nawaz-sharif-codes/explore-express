export function fetchUser(req, res) {
  res
    .status(200)
    .json({
      success: true,
      id: req.params.id,
      message: "user fetched successfully",
    });
}
