import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate()
    const [sippingAddress,setShippingAddress] = useState({
        firstName : "",
        lastName : "",
        address : "",
        city : "",
        postCode : "",
        country : "",
        phone : ""

    })
    const [email,setEmail] = useState("")
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
    {/* left section */}
    <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form action="">
            <h3 className="text-lg mb-4">Contact Details</h3>
            <div className="mb-4 ">
                <label className="block text-gray-700">Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
        </form>
    </div>
  </div>;
}

export default Checkout;
