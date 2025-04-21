import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

function SearchBar() {
  const [search, setSearch] = useState();
  const [isOpen, setIsOpen] = useState(false);
  function handleSearchToggle() {
    setIsOpen(!isOpen);
  }
  function handleSearchFormSubmit(e){
    e.preventDefault()
    console.log(search)
    setIsOpen(false)
  }
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form onSubmit={handleSearchFormSubmit} className="flex items-center justify-center w-full">
          <div className="relative w-1/2 flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 px-4 py-4 pl-2 pr-2 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* search icon */}
            <button type="submit">
              <HiMagnifyingGlass className="w-6 h-6" />
            </button>
          </div>
          {/* close icon */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-9 top-1/4 transform -translate-y-1/2  text-gray-600 hover:text-gray-800"
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6 " />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
