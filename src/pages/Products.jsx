import React from 'react'
import { Footer, Navbar, Product } from "../components"

const Products = () => {
  return (
    <>
      <Navbar />
      
      {/* Apply global font family to the Products page content */}
      <div style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <Product />
      </div>

      <Footer />
    </>
  )
}

export default Products