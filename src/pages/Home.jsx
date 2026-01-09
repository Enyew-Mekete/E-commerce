import { Navbar, Main, Product, Footer } from "../components";

function Home() {
  return (
    <>
      <Navbar />
      
      {/* Apply global font family to the entire page content */}
      <div style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <Main />
        <Product />
      </div>

      <Footer />
    </>
  )
}

export default Home