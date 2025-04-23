import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
function FilterSiderbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    size: [],
    material: [],
    brand: [],
    minPrice: 5,
    maxPrice: 100,
  });
  const [priceRange, setPriceRance] = useState([0, 100]);
  const categories = ["Top Wear", "Bottom wear"];
  const colors = ["Red", "Blue", "Black", "Pink", "Green","yellow","orange","violte","gold","silver", "Navy"];

  const sizes = ["S", "XS", "L", "XL", "XXL", "XXXL"];
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyster",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Lois Vitton",
    "Gucchi",
    "Channel",
    "Kelvin Klen",
    "Adidas",
    "Rebok",
    "Mufti",
    "Laxmipati",
    "Flying Jeans",
  ];
  const gender = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 5,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRance([0, params.maxPrice || 100]);
  }, [searchParams]);

  function handleFilterChange(e){
    const {name,value,checked,type} = e.target;
    // console.log({name,value,checked,type})

    let newFilters = {...filter}
    if(type === "checkbox"){
      if(checked){
        newFilters[name] = [...(newFilters[name] || []),value]
      }else{
        newFilters[name] = newFilters[name].filter((item)=> item !== value)
      }
    }else{
      newFilters[name] = value
    }
    setFilter(newFilters)
    console.log(newFilters)
    updateUrlParams(newFilters)
  }

  function updateUrlParams(newFilters){
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key)=>{
      if(Array.isArray(newFilters[key]) && newFilters[key].length > 0){
        params.append(key,newFilters[key].join(","))
      }else if(newFilters[key]){
        params.append(key,newFilters[key])
      }
    })
    setSearchParams(params)
    navigate(`?${params.toString()}`)
  }


  function handlePriceChange(e){
    const newPrice = e.target.value;
    setPriceRance([0,newPrice])
    const newFilters = {...filter,minPrice : 0,maxPrice : newPrice}
    setFilter(newFilters)
    updateUrlParams(newFilters)
  }
  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
      {/* category filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium">Category</label>
        {categories.map((category, index) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              checked={filter.category === category}
              value={category}
              onChange={handleFilterChange}
              name="category"
              className="mr-2 h-4 w-4 text-blue-500 fouces:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      {/* gender filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium">Gender</label>
        {gender.map((gender, index) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              checked={filter.gender === gender}
              value={gender}
              onChange={handleFilterChange}
              name="gender"
              className="mr-2 h-4 w-4 text-blue-500 fouces:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>
      {/* color filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-md mb-2">Colors</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color, index) => (

            <button name="color" value={color} onClick={handleFilterChange} key={color} className={`w-8 h-8 border border-gray-300 rounded-full cursor-pointer transition hover:scale-105 ${filter.color === color ? "ring ring-black" :""}`} style={{backgroundColor : color.toLowerCase()}}></button>
          ))}
        </div>
      </div>

      {/* size flyer */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size,index)=>(
            <div className="flex items-center mb-1" key={size}>
                <input type="checkbox" checked={filter.size.includes(size)} value={size} onChange={handleFilterChange} name="size" className="w-4 mr-2 h-4 border text-blue-400 focus:ring-blue-300" />
                <span className="text-gray-700">{size}</span>
            </div>
        ))}
      </div>
      {/* Material filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material,index)=>(
            <div className="flex items-center mb-1" key={material}>
                <input type="checkbox" checked={filter.material.includes(material)} value={material} onChange={handleFilterChange} name="material" className="w-4 mr-2 h-4 border text-blue-400 focus:ring-blue-300" />
                <span className="text-gray-700">{material}</span>
            </div>
        ))}
      </div>
      {/* Brands filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brands</label>
        {brands.map((brand,index)=>(
            <div className="flex items-center mb-1" key={brand}>
                <input type="checkbox" checked={filter.brand.includes(brand)} value={brand} onChange={handleFilterChange} name="brand" className="w-4 mr-2 h-4 border text-blue-400 focus:ring-blue-300" />
                <span className="text-gray-700">{brand}</span>
            </div>
        ))}
      </div>

      {/* price range filter */}
      <div className="mb-8">
        <label className="block text-gray-600 mb-2 font-medium">Price Range</label>
        <input type="range" onChange={handlePriceChange} value={priceRange[1]} name="priceRange" min={5} max={100}  className="w-full h-2 rounded-lg cursor-pointer appearance-none bg-gray-700" />
        <div className="flex justify-between text-gray-600 mt-2">
            <span>$ 0</span>
            <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}

export default FilterSiderbar;
