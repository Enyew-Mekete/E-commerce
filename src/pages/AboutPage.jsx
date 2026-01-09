import React from 'react'
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div 
        className="container my-5 py-3" 
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        <h1 className="text-center" style={{ color: '#1B5E7F', fontWeight: 'bold' }}>
          About Us
        </h1>
        <hr style={{ borderColor: '#1B5E7F', opacity: 0.5 }} />

        <p className="lead text-justify mt-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          An E-commerce platform is a digital framework that enables businesses and individuals to conduct buying and selling activities over the internet. It serves as the backbone of online retail operations, providing a centralized system where sellers can manage their product listings, inventory, pricing, and customer interactions. These platforms typically include features such as product catalogs, shopping carts, secure payment gateways, and order processing systems. By offering these tools, e-commerce platforms eliminate the need for a physical storefront, allowing businesses to reach a global audience and operate 24/7.
          In addition to basic transactional capabilities, modern e-commerce platforms often integrate advanced functionalities to enhance user experience and streamline business operations. These may include customer relationship management (CRM), marketing automation, analytics dashboards, SEO tools, and support for multiple languages and currencies. Platforms like Shopify, WooCommerce, Magento, and custom-built solutions using frameworks like React or Laravel provide flexibility for businesses of all sizes—from small startups to large enterprises—to tailor their online stores according to specific branding and operational needs.
          <br /> <br />  
          Furthermore, e-commerce platforms support various business models such as B2C (Business-to-Consumer), B2B (Business-to-Business), and C2C (Consumer-to-Consumer). They also facilitate mobile commerce, social commerce, and omnichannel retailing, enabling seamless integration across websites, mobile apps, and social media platforms. As consumer behavior continues to shift toward digital shopping, e-commerce platforms play a crucial role in driving innovation, improving accessibility, and fostering economic growth in the global digital marketplace. 
           </p>

        <h2 className="text-center py-4" style={{ color: '#1B5E7F' }}>
          Our Products
        </h2>

        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4 px-3">
            <div className="card h-100 shadow-sm border-0">
              <img 
                className="card-img-top img-fluid" 
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Men's Clothing" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="card-title text-center mb-0" style={{ color: '#1B5E7F' }}>
                  Men's Clothing
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4 px-3">
            <div className="card h-100 shadow-sm border-0">
              <img 
                className="card-img-top img-fluid" 
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Women's Clothing" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="card-title text-center mb-0" style={{ color: '#1B5E7F' }}>
                  Women's Clothing
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4 px-3">
            <div className="card h-100 shadow-sm border-0">
              <img 
                className="card-img-top img-fluid" 
                src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Jewelery" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="card-title text-center mb-0" style={{ color: '#1B5E7F' }}>
                  Jewelry
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4 px-3">
            <div className="card h-100 shadow-sm border-0">
              <img 
                className="card-img-top img-fluid" 
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Electronics" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="card-title text-center mb-0" style={{ color: '#1B5E7F' }}>
                  Electronics
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage