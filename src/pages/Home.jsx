import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivle from "../components/Products/NewArrivle";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";

const placeHolderPoducts = [
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
function Home() {
  return (
    <>
      <Hero />
      <GenderCollectionSection />
      <NewArrivle />
      {/* Best seller section */}
      <h2 className="text-3xl text-center font-bol mb-4">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeHolderPoducts} />
      </div>
      <FeaturedCollection />
      <FeaturesSection/>
    
    </>
  );
}

export default Home;
