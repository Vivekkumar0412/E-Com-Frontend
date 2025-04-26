import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaypalButton from "./PaypalButton";
let cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "XXL",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/500/500?random=1",
    },
    {
      name: "Nail Cutter",
      size: "S",
      color: "Silver",
      price: 10,
      image: "https://picsum.photos/500/500?random=2",
    },
    {
      name: "Jeans",
      size: "XXL",
      color: "Blue",
      price: 150,
      image: "https://picsum.photos/500/500?random=1",
    },
  ],
  totalPrice: 280,
};
function Checkout() {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
    phone: "",
  });
  const [email, setEmail] = useState("");

  // checkout function
  function createCheckoutFun(e) {
    e.preventDefault();
    setCheckoutId(1255);
  }

  // payment function
  function handlePaymentSuccessFun(details) {
    console.log(details, " Payment sucessfull");
    navigate("/order-confirmation");
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={createCheckoutFun}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4 ">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4 ">Dilevry</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.city,
                  })
                }
              />
            </div>
            <div className="">
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
                value={shippingAddress.postCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postCode: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              required
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
            />
          </div>
          <div className="">
            <label className="block text-gray-700">Phone No</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              required
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-6 ">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
              >
                Continue to Paypal
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay With Paypal</h3>
                <PaypalButton
                  amount={2000}
                  onSuccess={handlePaymentSuccessFun}
                  onError={(error) => alert("Payment Failed")}
                />
              </div>
            )}
          </div>
        </form>
      </div>
      {/* right section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-600">Size:{product.size}</p>
                  <p className="text-gray-600">Color:{product.color}</p>
                </div>
              </div>
              <p className="text-xl">$ {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Sub Total</p>
          <p>$ {cart.totalPrice}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center mt-4 text-lg border-t pt-4">
          <p>Total</p>
          <p>$ {cart.totalPrice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
