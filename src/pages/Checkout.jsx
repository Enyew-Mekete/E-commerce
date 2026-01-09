import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    setValidated(true);

    if (form.checkValidity() === true) {
      alert("Order placed successfully! (Demo)");
      // In a real app: process payment / submit order here
    }
  };

  const EmptyCart = () => {
    return (
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-12 py-5 text-center">
            <h4 className="display-5 fw-bold" style={{ color: "#1B5E7F" }}>
              Your Cart is Empty
            </h4>
            <p className="lead text-muted mt-3">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/"
              className="btn px-5 py-3 mt-4 text-white"
              style={{ backgroundColor: "#1B5E7F" }}
            >
              <i className="fa fa-arrow-left me-2"></i>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <div className="container py-5">
        <div className="row g-5">
          {/* Order Summary */}
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="card shadow-sm border-0">
              <div className="card-header py-4" style={{ backgroundColor: "#1B5E7F" }}>
                <h5 className="mb-0 text-white fw-bold">Order Summary</h5>
              </div>
              <div className="card-body p-4">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0 pb-3">
                    <span>Products ({totalItems})</span>
                    <span className="fw-bold">${Math.round(subtotal)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Shipping</span>
                    <span className="fw-bold">${shipping}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0 pt-3 border-top">
                    <strong>Total Amount</strong>
                    <strong style={{ color: "#1B5E7F", fontSize: "1.3rem" }}>
                      ${Math.round(subtotal + shipping)}
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Billing & Payment Form */}
          <div className="col-md-7 col-lg-8">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header py-4" style={{ backgroundColor: "#1B5E7F" }}>
                <h4 className="mb-0 text-white fw-bold">Billing Address</h4>
              </div>
              <div className="card-body p-4">
                <form className="needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <label className="form-label fw-bold">First Name</label>
                      <input type="text" className="form-control form-control-lg" required />
                      <div className="invalid-feedback">First name is required.</div>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label fw-bold">Last Name</label>
                      <input type="text" className="form-control form-control-lg" required />
                      <div className="invalid-feedback">Last name is required.</div>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="you@example.com"
                        required
                      />
                      <div className="invalid-feedback">Please enter a valid email address.</div>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold">Address</label>
                      <input type="text" className="form-control form-control-lg" placeholder="1234 Main St" required />
                      <div className="invalid-feedback">Please enter your shipping address.</div>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold">
                        Address 2 <span className="text-muted">(Optional)</span>
                      </label>
                      <input type="text" className="form-control form-control-lg" placeholder="Apartment or suite" />
                    </div>

                    <div className="col-md-5">
                      <label className="form-label fw-bold">Country</label>
                      <select className="form-select form-select-lg" required>
                        <option value="">Choose...</option>
                        <option>Ethiopia</option>
                      </select>
                      <div className="invalid-feedback">Please select a country.</div>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-bold">State/Region</label>
                      <select className="form-select form-select-lg" required>
                        <option value="">Choose...</option>
                        <option>Addis Ababa</option>
                      </select>
                      <div className="invalid-feedback">Please select a state/region.</div>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label fw-bold">Zip Code</label>
                      <input type="text" className="form-control form-control-lg" pattern="\d{5}" required />
                      <div className="invalid-feedback">Please enter a valid zip code (5 digits).</div>
                    </div>
                  </div>

                  <hr className="my-5" />

                  <h4 className="mb-4 fw-bold" style={{ color: "#1B5E7F" }}>Payment</h4>

                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Name on Card</label>
                      <input type="text" className="form-control form-control-lg" required />
                      <small className="text-muted">Full name as displayed on card</small>
                      <div className="invalid-feedback">Name on card is required.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Credit Card Number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="1234 5678 9012 3456"
                        pattern="\d{13,19}"
                        required
                      />
                      <div className="invalid-feedback">Please enter a valid credit card number (13-19 digits).</div>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label fw-bold">Expiration (MM/YY)</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="MM/YY"
                        pattern="(0[1-9]|1[0-2])\/\d{2}"
                        required
                      />
                      <div className="invalid-feedback">Please enter a valid expiration date (MM/YY).</div>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label fw-bold">CVV</label>
                      <input type="text" className="form-control form-control-lg" pattern="\d{3,4}" placeholder="123" required />
                      <div className="invalid-feedback">Please enter a valid CVV (3-4 digits).</div>
                    </div>
                  </div>

                  <hr className="my-5" />

                  <button
                    className="w-100 btn btn-lg py-3 text-white fw-bold"
                    type="submit"
                    style={{ backgroundColor: "#1B5E7F" }}
                  >
                    Complete Checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      
      <div style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <div className="container my-5 py-3">
          <h1 className="text-center display-5 fw-bold mb-4" style={{ color: "#1B5E7F" }}>
            Checkout
          </h1>
          <hr style={{ borderColor: "#1B5E7F", width: "150px", margin: "auto" }} />
          
          {state.length > 0 ? <ShowCheckout /> : <EmptyCart />}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;