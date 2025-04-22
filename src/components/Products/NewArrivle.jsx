import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function NewArrivle() {
  const scrollRef = useRef(null);
  const [isDraging, setIsdraging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const newArraivalArr = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "stylish jacket",
        },
      ],
    },
  ];

  function scroll(direction) {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  }
  function updateScrollButtons() {
    const container = scrollRef.current;
    const rightScrollable =
      container.scrollWidth > scrollLeft + container.clientWidth;
    if (container) {
      let scrollLeft = container.scrollLeft;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(rightScrollable);
    }

    console.log({
      scrollLeft: container.scrollLeft,
      clinetWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
    });
  }
  useEffect(() => {
    let container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
  });
  return (
    <section>
      <div className="container  text-center mx-auto mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivles</h2>
        <p className="text-lg textgray-600 mb-8">
          Discover the latest oversized blazers, monochrome outfits, statement
          sleeves, and athleisure wear, along with a revival of vintage-inspired
          clothing, bold prints, and neon colors
        </p>
        {/* scroll button */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
            className={`p-2 rounded-sm border ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-white-200 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded-sm border ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-white-200 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      {/* scroll content */}
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex space-x-6 relative"
      >
        {newArraivalArr.map((product, index) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1 ">$ {product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivle;
