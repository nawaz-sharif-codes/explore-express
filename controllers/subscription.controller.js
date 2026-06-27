export function fetchSubscription(req, res) {
  res
    .status(200)
    .json({
      success: true,
      id: req.params.id,
      message: "subscription fetched successfully",
    });
}
