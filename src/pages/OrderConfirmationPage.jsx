import React from "react";
import Checkout from "../components/Cart/Checkout";
const checkout = {
  _id: "123345",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "Black",
      size: "XXL",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/500/500?random=8",
    },
    {
      productId: "2",
      name: "Jeans",
      color: "Blue",
      size: "XXL",
      price: 50,
      quantity: 1,
      image: "https://picsum.photos/500/500?random=4",
    },
    {
      productId: "3",
      name: "Hat",
      color: "Brown",
      size: "XXL",
      price: 10,
      quantity: 1,
      image: "https://picsum.photos/500/500?random=5",
    },
  ],
  shippingAddress: {
    address: "V K S COLONY",
    city: "Gaya",
    country: "India",
  },
};
function OrderConfirmationPage() {
  function calculateEstimatedDelivery(createdAt) {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for your order
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* order id and date */}
            <div className="">
              <h2 className="text-xl font-semibold ">
                Order Id:{checkout._id}
              </h2>
              <p className="text-gray-500 ">
                Order Date :{new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* estimated dilevery  */}
            <div className="">
              <p className="text-emerald-700 text-sm">
                Estimated Dilevry :
                {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* order items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((items, index) => (
              <div className="flex items-center mb-4" key={items.productId}>
                <img
                  src={items.image}
                  alt={items.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{items.name}</h4>
                  <p className="text-gray-500">
                    {items.color} | {items.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md ">$ {items.price}</p>
                  <p className="text-sm text-gray-500">
                    Quantity : {items.quantity}
                  </p>
                </div>
              </div>
            ))}

            {/* // payment and delivery infor */}
            <div className="grid grid-cols-2 gap-8">
              <div className="">
                <h4 className="text-lg font-semibold mb-2">Payment</h4>
                <p className="text-gray-600">PayPal</p>
              </div>
              {/* delivery infor */}
              <div className="">
                <h4 className="text-lg font-semibold mb-2">Delivery</h4>
                <p className="text-gray-600">{checkout.shippingAddress.address}</p>
                <p className="text-gray-600">{checkout.shippingAddress.city} {" "} {checkout.shippingAddress.country}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmationPage;
