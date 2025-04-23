import React, { useEffect, useState } from "react";

function MyOrderPage() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const mockOrder = [
        {
          _id: "12323",
          createdAt: new Date(),
          shippingAddres: { city: "Gaya", state: "Bihar", Country: "India" },
          orderItems: [{ name: "Jeans", image: "https://picsum.photos/500/500?random=3", }],
          totalPrice : 100,
          isPaid : true
        },
        {
          _id: "45644",
          createdAt: new Date(),
          shippingAddres: { city: "San francisco", state: "California", Country: "USA" },
          orderItems: [{ name: "Gold Chain", image: "https://picsum.photos/500/500?random=4", }],
          totalPrice : 970,
          isPaid : false
        },
      ];
      setOrder(mockOrder)
    });
  });
  return <div className="max-w-7xl mx-auto p-4 sm:-6 ">
    <h2 className="text-xl sm:text-2l font-bold mb-6">
        My Orders
    </h2>
    <div className="relative shadow-dm sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-5000">
            <thead className="bg-green-100 text-xs uppercase text-gray-700">
                <tr>
                    <th className="py-2 px-4  sm:py-3">Image</th>
                    <th className="py-2 px-4  sm:py-3">Order Id</th>
                    <th className="py-2 px-4  sm:py-3">Created</th>
                    <th className="py-2 px-4  sm:py-3">Shipping address</th>
                    <th className="py-2 px-4  sm:py-3">Items</th>
                    <th className="py-2 px-4  sm:py-3">Price</th>
                    <th className="py-2 px-4  sm:py-3">Status</th>
                </tr>
            </thead>
            <tbody>
                {order && order.length > 0 ? order.map((product,index)=>(
                    <tr key={product._id} className="border-b hover:border-gray-50 cursor-pointer">
                        <td className="py-2 px-2 sm:py-4 ">
                            <img src={product.orderItems[0]?.image} alt="order image" className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded"/>
                        </td>
                        <td className="py-2 px-2 sm:py-4 ">
                            {product._id}
                        </td>
                        <td className="py-2 px-2 sm:py-4 ">
                            {new Date(product.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-2 px-2 sm:py-4 ">
                            {product.shippingAddres.city} | {product.shippingAddres.state} | {product.shippingAddres.Country}
                        </td>
                        <td className="py-2 px-2 sm:py-4 ">
                            {product.orderItems[0]?.name}
                        </td>
                        <td className="py-2 px-2 sm:py-4 ">
                            {product.totalPrice}
                        </td>
                        <td className="py-2 px-2 sm:py-4 ">
                            <span className={product.isPaid ? "text-green-700":"text-red-700"}>{product.isPaid ? "PAID":"PENDING"}</span>
                        </td>
                        
                    </tr>
                )):(
                    <tr>
                        <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                            You have no orders
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  </div>;
}

export default MyOrderPage;
