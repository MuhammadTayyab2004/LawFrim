import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/img/logo.svg';

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <NavLink to='/' className="navbar-brand">
                        <img src={Logo} alt="logo" />
                    </NavLink>

                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="line nav-link" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/practiceareas' className="line nav-link" >Practice Area</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/attorneys' className="line nav-link">Attorneys</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' className="line nav-link" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className="line nav-link">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="navbar-text">
                            <button type='text' className='btn_connect' onClick={() => console.log('connect')}>
                                <span>+12 294 7892 65</span>
                            </button>
                        </div>
                    </div>


                </div>
            </nav>

        </>
    );

}

export default Navbar;
