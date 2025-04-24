import React from "react";
import { Link } from "react-router-dom";
import featuredImg from "../../assets/featured.webp"
function FeaturedCollection() {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* left content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apprel Made for your Everyday Life
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            dolores vitae voluptate, molestias sint hic eius illo minima
            asperiores optio?
          </p>
          <Link to={"/collections/all"} className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
            Shop Now
          </Link>
        </div>

        {/* right secton */}
        <div className="lg:w-1/2">
            <img src={featuredImg} alt="featured image" className="w-full h-full object-cover lg:rounded-tr-3xl rounded-br-3xl" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
