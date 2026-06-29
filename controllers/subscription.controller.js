import { fetchUserSubscriptions } from "../services/subscription.service.js";

export function fetchSubscription(req, res) {
  const subscriptions = fetchUserSubscriptions(req.params.id);
  res.status(200).json({
    success: true,
    subscriptions,
    message: "subscriptions fetched successfully",
  });
}
