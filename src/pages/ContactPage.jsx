import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (Demo)");
    e.target.reset();
  };

  return (
    <>
      <Navbar />

      <div 
        className="container my-5 py-3" 
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold" style={{ color: '#1B5E7F' }}>
            Let's Collaborate
          </h1>
          <p className="lead mx-auto col-lg-8" style={{ color: '#333', lineHeight: '1.8' }}>
            Ready to take your digital presence to the next level? Fill out the
            form below. Every message is securely logged into the{" "}
            <strong style={{ color: '#1B5E7F' }}>E-commerce_db.21</strong> table.
          </p>
        </div>

        <div className="row justify-content-center">
          {/* Left Column - Contact Info */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center">
                  <div 
                    className="text-white rounded-circle d-flex align-items-center justify-content-center me-4" 
                    style={{ width: "50px", height: "50px", backgroundColor: '#1B5E7F' }}
                  >
                    <i className="fa fa-envelope fa-lg"></i>
                  </div>
                  <div>
                    <small className="fw-bold" style={{ color: '#1B5E7F' }}>DIRECT EMAIL</small>
                    <p className="mb-0 fw-bold" style={{ color: '#333' }}>enyewmekete65@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center">
                  <div 
                    className="text-white rounded-circle d-flex align-items-center justify-content-center me-4" 
                    style={{ width: "50px", height: "50px", backgroundColor: '#1B5E7F' }}
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </div>
                  <div>
                    <small className="fw-bold" style={{ color: '#1B5E7F' }}>LINKEDIN</small>
                    <p className="mb-0 fw-bold" style={{ color: '#333' }}>Enyew Mekete</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center">
                  <div 
                    className="text-white rounded-circle d-flex align-items-center justify-content-center me-4" 
                    style={{ width: "50px", height: "50px", backgroundColor: '#1B5E7F' }}
                  >
                    <i className="fa fa-database fa-lg"></i>
                  </div>
                  <div>
                    <small className="fw-bold" style={{ color: '#1B5E7F' }}>DATABASE CONNECTIVITY</small>
                    <p className="mb-0" style={{ color: '#555', lineHeight: '1.6' }}>
                      Connected to <strong style={{ color: '#1B5E7F' }}>E-commerce_db.21</strong>. 
                      Our system ensures data validation before writing to the table.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-bold" style={{ color: '#1B5E7F' }}>
                      FULL NAME <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-pill"
                      placeholder="Your name"
                      required
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold" style={{ color: '#1B5E7F' }}>
                      EMAIL <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-pill"
                      placeholder="Email address"
                      required
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold" style={{ color: '#1B5E7F' }}>
                      PHONE NUMBER <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control form-control-lg rounded-pill"
                      placeholder="+251..."
                      required
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold" style={{ color: '#1B5E7F' }}>
                      MESSAGE <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control rounded-3"
                      rows="5"
                      placeholder="Tell me about your project..."
                      required
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-lg px-5 py-3 rounded-pill shadow-sm text-white"
                      style={{ backgroundColor: '#1B5E7F' }}
                    >
                      SEND MESSAGE <i className="fa fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;