import React from "react";

function OrderManagment() {
  const orders = [
    {
      _id: 123344,
      user: { name: "Test" },
      totalPrice: 300,
      status: "Processing",
    },
  ];

  function handleSelectChange(orderId, orderVal) {
    console.log(orderId, orderVal);
  }
  return (
    <div className="max-w-7xl mx-auto p-6 container">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Order Id</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr
                  key={orders._id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">
                    {order.user.name}
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">
                    {order.totalPrice}
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">
                    <select
                      name="status"
                      onChange={(e) =>
                        handleSelectChange(order._id, e.target.value)
                      }
                      value={order.status}
                      className="bg-gray-50 text-sm rounded focus:ring-blue-500 border-gray-300 text-gray-900 focus:border-blue-900 block p-2.5"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shiped">Shiped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancled">Cancled</option>
                    </select>
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">
                    <button
                      onClick={(e) =>
                        handleSelectChange(order._id, "Delivered")
                      }
                      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                      Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className=" text-gray-700 text-center">
                  No Orders Found !
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderManagment;
