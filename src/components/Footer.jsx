import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-5" style={{ backgroundColor: "#1B5E7F" }}>
        <div className="container">
          <div className="row align-items-center text-white">
            {/* Left Section: Logo and Description */}
            <div className="col-lg-4 mb-4 mb-lg-0 text-center text-lg-start">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-3">
                <img
                  src="./assets/logo.jpg"
                  alt=" Logo"
                  style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                  className="me-3"
                />
                <h4 className="mb-0 fw-bold">E-commerce</h4>
              </div>
              <p style={{ fontFamily: "'Times New Roman', Times, serif" }} className="mb-0 opacity-90">
                An E-commerce platform is a digital system that enables Businesses or individuals to buy and sell products or services online. 
                It handles everything from product listings and shopping carts to secure payments and order management, 
                making it easy for customers to shop from anywhere, anytime.
              </p>
            </div>

            {/* Middle Section: Quick Links */}
            <div style={{ fontFamily: "'Times New Roman', Times, serif" }} className="col-lg-4 mb-4 mb-lg-0 text-center">
              <h5 className="mb-4 fw-bold">Quick Links</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#home" className="text-white text-decoration-none opacity-90 hover-opacity-100">Home</a></li>
                <li className="mb-2"><a href="#about" className="text-white text-decoration-none opacity-90 hover-opacity-100">About</a></li>
                <li className="mb-2"><a href="https://enyew-mekete.github.io/Enyew-Mekete-portfolio/" className="text-white text-decoration-none opacity-90 hover-opacity-100">Portfolio</a></li>
                <li className="mb-2"><a href="https://enyew-mekete.github.io/en-tech-s.c/" className="text-white text-decoration-none opacity-90 hover-opacity-100">My Company</a></li>
              </ul>
            </div>

            {/* Right Section: Let's Connect */}
            <div style={{ fontFamily: "'Times New Roman', Times, serif" }} className="col-lg-4 text-center text-lg-end">
              <h5 className="mb-3 fw-bold">Let's Connect</h5>
              <p className="mb-4 opacity-90">
                Open to new opportunities and interesting projects.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-end gap-3">
                <a href="https://github.com/Enyew-Mekete" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm rounded-circle p-2">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/enyew-mekete-106308372" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm rounded-circle p-2">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="mailto:enyewmekete65@gmail.com" className="btn btn-outline-light btn-sm rounded-circle p-2">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://https://t.me/En_TechSC" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm rounded-circle p-2">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Divider and Copyright */}
          <hr className="my-5 border-secondary opacity-50" />
          
          <div className="text-center text-white opacity-80">
            <p style={{ fontFamily: "'Times New Roman', Times, serif" }} className="mb-1 bold">
              Designed and Developed By <strong>Enyew.M</strong> - Founder and CEO of En-Tech S.C
            </p>
            <p style={{ fontFamily: "'Times New Roman', Times, serif" }} className="mb-0 bold">Junly, 2022 G.C © All Rights Reserved!</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;