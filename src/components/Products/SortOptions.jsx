import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SortOptions() {
  const [searchParams,setSearchparams] = useSearchParams()
  function handleSortChange(e){
    const sortBy = e.target.value
    searchParams.set("sortBy",sortBy)
    setSearchparams(searchParams)
  }
  return (
    <div className='mb-4 flex items-center justify-end'>
      <select onChange={handleSortChange} value={searchParams.get("sortBy") || ""} id="sort" className='border p-2 rounded-md focus::outline-non'>
        <option value="Default">Default</option>
        <option value="priceAsc">Price: low to high</option>
        <option value="priceDec">Price: hight to low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  )
}

export default SortOptions