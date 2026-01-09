import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const addItem = (product) => dispatch(addCart(product));
  const removeItem = (product) => dispatch(delCart(product));

  const EmptyCart = () => (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 text-center py-5">
          <h4 className="display-5 fw-bold" style={{ color: "#1B5E7F" }}>
            Your Cart is Empty
          </h4>
          <p className="lead text-muted mt-4">
            Start shopping and add some amazing products to your cart!
          </p>
          <Link
            to="/"
            className="btn px-5 py-3 mt-4 text-white fw-bold"
            style={{ backgroundColor: "#1B5E7F" }}
          >
            <i className="fa fa-arrow-left me-2"></i>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="h-100">
        <div className="container py-5">
          <div className="row justify-content-center">
            {/* Cart Items */}
            <div className="col-lg-8 col-md-12">
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-header py-4" style={{ backgroundColor: "#1B5E7F" }}>
                  <h5 className="mb-0 text-white fw-bold">Item List</h5>
                </div>
                <div className="card-body p-4">
                  {state.map((item) => (
                    <div key={item.id} className="mb-4">
                      <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 text-center mb-3 mb-md-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="img-fluid rounded shadow-sm"
                            style={{ maxHeight: "120px", objectFit: "contain" }}
                          />
                        </div>

                        <div className="col-lg-5 col-md-8">
                          <h6 className="fw-bold" style={{ color: "#1B5E7F" }}>
                            {item.title}
                          </h6>
                          <p className="text-muted small mb-0">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>

                        <div className="col-lg-4 col-md-12 text-center">
                          <div className="d-flex align-items-center justify-content-center mb-3">
                            <button
                              className="btn btn-sm px-3"
                              style={{
                                backgroundColor: "#1B5E7F",
                                color: "white",
                                border: "none"
                              }}
                              onClick={() => removeItem(item)}
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <span className="mx-4 fw-bold fs-5">{item.qty}</span>

                            <button
                              className="btn btn-sm px-3"
                              style={{
                                backgroundColor: "#1B5E7F",
                                color: "white",
                                border: "none"
                              }}
                              onClick={() => addItem(item)}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>

                          <p className="fw-bold mb-0" style={{ color: "#1B5E7F" }}>
                            ${ (item.price * item.qty).toFixed(2) }
                          </p>
                        </div>
                      </div>

                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4 col-md-12">
              <div className="card shadow-sm border-0">
                <div className="card-header py-4" style={{ backgroundColor: "#1B5E7F" }}>
                  <h5 className="mb-0 text-white fw-bold">Order Summary</h5>
                </div>
                <div className="card-body p-4">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between px-0 pb-3">
                      <span>Products ({totalItems})</span>
                      <span className="fw-bold">${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between px-0">
                      <span>Shipping</span>
                      <span className="fw-bold">${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between px-0 pt-3 border-top">
                      <strong>Total Amount</strong>
                      <strong style={{ color: "#1B5E7F", fontSize: "1.4rem" }}>
                        ${Math.round(subtotal + shipping)}
                      </strong>
                    </li>
                  </ul>

                  <Link
                    to="/checkout"
                    className="btn btn-lg w-100 mt-4 text-white fw-bold py-3"
                    style={{ backgroundColor: "#1B5E7F" }}
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />

      <div style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <div className="container my-5 py-3">
          <h1 className="text-center display-5 fw-bold mb-4" style={{ color: "#1B5E7F" }}>
            Your Cart
          </h1>
          <hr style={{ borderColor: "#1B5E7F", width: "150px", margin: "auto" }} />

          {state.length > 0 ? <ShowCart /> : <EmptyCart />}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;