export function fetchOrderById(id) {
  const order = {
    orderId: id,
    orderPrice: 399,
    orderDate: new Date(),
  };
  return order;
}
