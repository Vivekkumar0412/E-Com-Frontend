import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSiderbar from "../components/Products/FilterSiderbar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";
function CollectionPage() {
  const [products, setProducts] = useState([]);
  const sideBarRef = useRef(null);
  const [isSidebarOpen, setIssidebarOpen] = useState(false);
  function toggleSidebar() {
    setIssidebarOpen(!isSidebarOpen);
  }

  function handleClickOutside(e) {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setIssidebarOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[]);
  useEffect(() => {
    setTimeout(() => {
      const fetcProducts = [
        {
          _id: 1,
          name: "Jeans",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=1",
              altText: "Jacket 1",
            },
          ],
        },
        {
          _id: 2,
          name: "Cargo",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=2",
              altText: "Jacket 1",
            },
          ],
        },
        {
          _id: 3,
          name: "Denim",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
              altText: "Jacket 1",
            },
          ],
        },
        {
          _id: 4,
          name: "Bikini",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
              altText: "Jacket 1",
            },
          ],
        },
        {
          _id: 4,
          name: "Frok",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
              altText: "Jacket 1",
            },
          ],
        },
        {
          _id: 6,
          name: "Tank top",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
              altText: "Jacket 1",
            },
          ],
        },
        {
          _id: 7,
          name: "Top",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
              altText: "Jacket 1",
            },
          ],
        },
        {
          _id: 8,
          name: "Casuals",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
              altText: "Jacket 1",
            },
          ],
        },
      ];
      setProducts(fetcProducts);
    });
  }, 1000);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* mobile filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
        Filters{" "}
      </button>
      {/* filter side bar */}
      <div
        ref={sideBarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSiderbar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl mb-4 uppercase">All collection</h2>
        {/* sort option */}
        <SortOptions />

        {/* products grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default CollectionPage;
