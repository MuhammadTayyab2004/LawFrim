import React from "react";
import { NavLink } from "react-router-dom";

import About from "../assets/img/Security Consultants.jpg";
import Lawyer from "../assets/img/lawyer.png";
import Handshake from "../assets/img/handshake.png";
import Approved from "../assets/img/approved.png";
import Medal from "../assets/img/medal.png";


function AboutUs() {

    return (
        <>
            <section className="About_us">
                <div className="container text-center">

                    <h1 className="pb-lg-5 mb-lg-5">About Us</h1>

                    <div className="row">

                        <div className="col-md-12 col-lg-6 py-5">
                            <h1>I'm Jon Campbell</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, soluta perspiciatis. Necessitatibus aut magnam aliquam veniam! Tenetur esse voluptate unde harum placeat dolorum numquam, autem, minima libero eaque neque dolor?</p>
                            <button className="btn_common my-4">
                                <NavLink to='#' className='text-white nav_link_btn text-decoration-none'>About Us</NavLink>
                            </button>
                        </div>

                        <div className="col-md-12 col-lg-6 about_img">
                            <img src={About} alt="about" />
                        </div>

                    </div>

                    <div className="row pt-5 about_imgs_div">
                        <div className="col-md-12 col-lg-3">
                            <img src={Lawyer} alt="count_img" />
                            <h4>{'150+'}</h4>
                            <p>Qualified Lawyers</p>
                        </div>
                        <div className="col-md-12 col-lg-3">
                            <img src={Handshake} alt="count_img" />
                            <h4>{'5000+'}</h4>
                            <p>Trusted Clients</p>
                        </div>
                        <div className="col-md-12 col-lg-3">
                            <img src={Approved} alt="count_img" />
                            <h4>{'98%+'}</h4>
                            <p>Successful Cases</p>
                        </div>
                        <div className="col-md-12 col-lg-3">
                            <img src={Medal} alt="count_img" />
                            <h4>{'50+'}</h4>
                            <p>Honors & Awards</p>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
}

export default AboutUs;