import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    setValidated(true);

    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    // Always show network message even if credentials are correct
    alert('Please switch your network');
  };

  return (
    <>
      <Navbar />

      <div style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <div className="container my-5 py-0">
          <h1 className="text-center display-5 fw-bold mb-4" style={{ color: "#1B5E7F" }}>
            Login
          </h1>
          <hr style={{ borderColor: "#1B5E7F", width: "150px", margin: "auto" }} />

          <div className="row justify-content-center mt-4">
            <div className="col-md-5 col-lg-4 col-sm-8">
              <div className="card shadow-sm border-0 p-3">
                <form className="needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-bold" style={{ color: "#1B5E7F" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="name@example.com"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold" style={{ color: "#1B5E7F" }}>
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      required
                      minLength="6"
                    />
                    <div className="invalid-feedback">
                      Password is required (min 6 characters).
                    </div>
                  </div>

                  <div className="mb-4 text-center">
                    <p className="mb-0">
                      New Here?{" "}
                      <Link to="/register" className="text-decoration-underline fw-bold" style={{ color: "#1B5E7F" }}>
                        Register
                      </Link>
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-lg px-5 py-3 text-white fw-bold"
                      style={{ backgroundColor: "#1B5E7F" }}
                    >
                      Login
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

export default Login;