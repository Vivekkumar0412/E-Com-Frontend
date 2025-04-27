import React, { useState } from "react";

function EditProductPage() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collection: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
      },
      {
        url: "https://picsum.photos/500/500?random=8",
      },
    ],
  });

  function handleProductEditFun(e) {
    const { name, value } = e.target;
    setProductData((prevVal) => ({ ...prevVal, [name]: value }));
  }

  async function handleImageUpload(e) {
    const file = e.target.files[0];
    console.log(file, "filee");
  }

  function handleProductSubmit(e) {
    e.preventDefault();
    console.log(productData);
    setProductData({
      name: "",
      description: "",
      price: 0,
      countInStock: 0,
      sku: "",
      category: "",
      brand: "",
      sizes: [],
      colors: [],
      collection: "",
      material: "",
      gender: "",
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
        },
        {
          url: "https://picsum.photos/500/500?random=8",
        },
      ],
    });
  }
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded container">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleProductSubmit}>
        <div className="mb-6 ">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            required
            className="w-full border border-gray-300 rounded p"
            name="name"
            value={productData.name}
            onChange={handleProductEditFun}
          />
        </div>
        {/* description */}
        <div className="mb-6 ">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            type="text"
            required
            rows={4}
            className="w-full border border-gray-300 rounded p"
            name="description"
            value={productData.description}
            onChange={handleProductEditFun}
          />
        </div>
        {/* price */}
        <div className="mb-6 ">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            required
            className="w-full border border-gray-300 rounded p"
            name="price"
            value={productData.price}
            onChange={handleProductEditFun}
          />
        </div>
        {/* count in stock */}
        <div className="mb-6 ">
          <label className="block font-semibold mb-2">Count In Stock</label>
          <input
            type="number"
            required
            className="w-full border border-gray-300 rounded p"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleProductEditFun}
          />
        </div>
        {/* sku */}
        <div className="mb-6 ">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            required
            className="w-full border border-gray-300 rounded p"
            name="sku"
            value={productData.sku}
            onChange={handleProductEditFun}
          />
        </div>
        {/* sizes */}
        <div className="mb-6 ">
          <label className="block font-semibold mb-2">
            Sizes (Comma separated)
          </label>
          <input
            type="text"
            required
            className="w-full border border-gray-300 rounded p"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
          />
        </div>
        {/* colors */}
        <div className="mb-6 ">
          <label className="block font-semibold mb-2">
            Colors (Comma separated)
          </label>
          <input
            type="text"
            required
            className="w-full border border-gray-300 rounded p"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((col) => col.trim()),
              })
            }
          />
        </div>
        {/* image upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image</label>
          <input type="file" onChange={handleImageUpload} />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-green-500 rounded w-full hover:bg-green-600 transition-colors py-2"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProductPage;
