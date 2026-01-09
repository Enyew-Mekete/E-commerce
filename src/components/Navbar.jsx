import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)

    return (
        <nav 
            className="navbar navbar-expand-lg py-3 sticky-top" 
            style={{ backgroundColor: '#1B5E7F' }}  // Custom background color
        >
            <div className="container">
                <a href="/">
                    <img 
                        src="./assets/logo.jpg" 
                        alt="Logo" 
                        style={{ borderRadius: '50%' }} 
                        width="40" 
                        height="40" 
                    />
                </a>
                <NavLink className="navbar-brand fw-bold fs-4 px-2 text-white" to="/">
                    E-commerce
                </NavLink>
                <button 
                    className="navbar-toggler mx-2" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div  className="fw-bold fs-5 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/product">Products</NavLink>
                        </li>
                    </ul>
                    <div className="fw-bold fs-6 buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-light m-2">
                            <i className="fa fa-sign-in-alt mr-1"></i> Login
                        </NavLink>
                        <NavLink to="/register" className="btn btn-outline-light m-2">
                            <i className="fa fa-user-plus mr-1"></i> Register
                        </NavLink>
                        <NavLink to="/cart" className="btn btn-outline-light m-2">
                            <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar