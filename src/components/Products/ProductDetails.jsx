import React, { useEffect, useState } from "react";
let selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "stylish jacket perfect for any occasation",
  brand: "Fashion Brand",
  matherial: "Leather",
  sizes: ["M", "XL", "XXL", "XXXL", "SM"],
  colors: ["red", "black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Jacket 2",
    },
  ],
};
function ProductDetails() {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  let [selectedColor, setSelectedColor] = useState("");
  let [quantity, setQuantity] = useState(1);
  let [isButtonDisables, setIsDisabled] = useState(false);
  useEffect(() => {
    if (selectedProduct.images.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg ">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                key={index}
                alt={image.altText || "thumbnail image"}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          <div className="md:w-1/2 ">
            <div className="mb-4 ">
              <img
                src={mainImage}
                alt={selectedProduct.images[0]?.altText || "Main image"}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* mobile thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                key={index}
                alt={image.altText || "thumbnail image"}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* right side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ${selectedProduct.price}
            </p>
            <p className="mb-4 text-gray-600">{selectedProduct.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">
                <div className="flex gap-2 mt-2">
                  {selectedProduct.colors.map((color, index) => (
                    <button
                      onClick={() => setSelectedColor(color)}
                      key={index}
                      className={`h-8 w-8 rounded-full border ${
                        selectedColor === color
                          ? "border-4 border-black"
                          : "border-gray-300"
                      }`}
                      style={{
                        backgroundColor: color.toLocaleLowerCase(),
                        filter: "brightness(0.5)",
                      }}
                    ></button>
                  ))}
                </div>
              </p>
            </div>
            <div className="mb-4 ">
              <p className="text-gray-700">Size :</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size, index) => (
                  <button
                    onClick={() => setSelectedSize(size)}
                    key={index}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="mb-6">
                <p className="text-gray-700">Quantity :</p>
                <div className="flex items-center space-x-4 mt-2">
                  <button
                    onClick={() => setQuantity(quantity - 1)}
                    className="px-2 bg-gray-200 rounded text-lg"
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 bg-gray-200 rounded text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button className="text-white bg-black w-full rounded py-2 px-6 mb-4">
              Add to Cart
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl mb-4 font-bold">Characteristcs :</h3>
              <table className="w-full text-sm text-left text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.matherial}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
