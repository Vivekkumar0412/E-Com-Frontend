import React from "react";
import { Link } from "react-router-dom";

function ProductManagement() {
  const products = [
    {
      _id: 8898908,
      name: "Jacket",
      price: 100,
      sku: "8977-F",
    },
  ];

  function deleteProductFun(productId){
    if(window.confirm("Do you really want to delete the product ?")){
        console.log("delete product : ",productId)
    }
  }
  return (
    <div className="max-w-7xl mx-auto p-6 container">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <div className="overflow-x-auto shadow-md rounded">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">SKU</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.price}
                  </td>
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.sku}
                  </td>
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    <Link className="bg-yellow-500 text-white px-3 py-2 rounded mr-2 hover:bg-yellow-600" to={`/admin/products/${product._id}/edit`}>Edit</Link>
                    <button type="button" className="bg-red-500 text-white hover:bg-red-600 py-1 px-2 rounded" onClick={()=>deleteProductFun(product._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center bg-gray-100 text-gray-500">No Products Foun</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductManagement;
