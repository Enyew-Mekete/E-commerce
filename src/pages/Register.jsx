import React, { useState } from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
    const [validated, setValidated] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        setValidated(true);

        // Check password match
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        } else {
            setPasswordError('');
        }

        // Always show network message even if valid
        alert('Please switch your network');
    };

    const handleConfirmChange = (e) => {
        setConfirmPassword(e.target.value);
        if (password && e.target.value && password !== e.target.value) {
            setPasswordError('Passwords do not match');
        } else {
            setPasswordError('');
        }
    };

    return (
        <>
            <Navbar />

            <div style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                <div className="container my-5 py-1">
                    <h1 className="text-center display-5 fw-bold mb-4" style={{ color: "#1B5E7F" }}>
                        Register
                    </h1>
                    <hr style={{ borderColor: "#1B5E7F", width: "150px", margin: "auto" }} />

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-5 col-lg-5 col-sm-8">
                            <div className="card shadow-sm border-0 p-4">
                                <form className="needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="form-label fw-bold" style={{ color: "#1B5E7F" }}>
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Your Name"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your full name.
                                        </div>
                                    </div>

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
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            minLength="6"
                                        />
                                        <div className="invalid-feedback">
                                            Password must be at least 6 characters.
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-bold" style={{ color: "#1B5E7F" }}>
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            placeholder="Re-enter Password"
                                            value={confirmPassword}
                                            onChange={handleConfirmChange}
                                            required
                                            style={{ borderColor: passwordError ? '#dc3545' : '' }}
                                        />
                                        {passwordError && (
                                            <div className="text-danger small mt-2">
                                                {passwordError}
                                            </div>
                                        )}
                                        <div className="invalid-feedback">
                                            Please confirm your password.
                                        </div>
                                    </div>

                                    <div className="mb-4 text-center">
                                        <p className="mb-0">
                                            Already have an account?{" "}
                                            <Link to="/login" className="text-decoration-underline fw-bold" style={{ color: "#1B5E7F" }}>
                                                Login
                                            </Link>
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-lg px-5 py-3 text-white fw-bold"
                                            style={{ backgroundColor: "#1B5E7F" }}
                                        >
                                            Register
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
    )
}

export default Register