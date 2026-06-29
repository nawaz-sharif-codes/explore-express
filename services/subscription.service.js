export function fetchUserSubscriptions(id) {
  const subscriptions = [
    {
      id: 2,
      productName: "iPhone 13 pro",
      invoiceAmount: 130000,
    },
    {
      id: 3,
      productName: "iWatch 7 Gen",
      invoiceAmount: 45000,
    },
  ];
  return subscriptions.find((x) => x.id == id);
}
