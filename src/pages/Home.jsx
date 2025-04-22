import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivle from '../components/Products/newArrivle'
import ProductDetails from '../components/Products/ProductDetails'

function Home() {
  return (
    <>
    <Hero/>
    <GenderCollectionSection/>
    <NewArrivle/>
    {/* Best seller section */}
    <h2 className='text-3xl text-center font-bol mb-4'>Best Seller</h2>
    <ProductDetails/>
    </>
  )
}

export default Home