import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/img/logo.svg";
import Icon1 from "../assets/img/icon1.svg";
import Icon2 from "../assets/img/icon2.svg";
import Icon3 from "../assets/img/icon3.svg";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-lg-3 footer_Area_1  mb-5">
                            <NavLink to='/'><img src={Logo} className='mb-1' alt="logo" /></NavLink>
                            <br />
                            <br />
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate temporibus elige&nbsp;ndi et placeat atque enim.</p>
                        </div>

                        <div className="col-md-12 col-lg-3 footer_Area_2 mb-5">

                            <h4>Permalinks</h4>
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to='/' className="line nav-link" aria-current="page" >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/practicearea' className="line nav-link" >Practice Area</NavLink>
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
                        </div>

                        <div className="col-md-12 col-lg-3 footer_Area_3 mb-5">
                            <h4>Permalinks</h4>
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to='/' className="line nav-link" aria-current="page" >Privacy Policy</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/' className="line nav-link" >Terms and Condition</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/' className="line nav-link">Refund Privacy</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-12 col-lg-3 footer_Area_4 mb-5">
                            <h4>Contact Us</h4>
                            <p>+12 294 7892 65</p>
                            <p>sowel19202@etondy.com</p>
                            <div className="social-icon">
                                <a href="#contact">  <img src={Icon1} className='social_img' alt="img" /> </a>
                                <a href="#contact">  <img src={Icon2} className='social_img' alt="img" /> </a>
                                <a href="#contact">  <img src={Icon3} className='social_img' alt="img" /> </a>
                            </div>
                        </div>


                    </div>



                </div>
            </footer>
            <div className="footer_end">
                Copyright ©️ 2023 all right reserved! & <i className="text-primary fa fa-heart-circle-bolt heart"></i> by tayyab
            </div>
        </>
    )
}