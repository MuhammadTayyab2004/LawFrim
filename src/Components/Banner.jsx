import React from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/hero-img1.jpg";


function Banner() {
    return (
        <>
            <section className="banner">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-12 col-lg-5 py-lg-5 mt-lg-5">
                            <h1>All investigation & litigation needs</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quae velit aliquid a ad ipsam quam nihil accusamus eveniet dolorum.</p>
                            <button className="btn banner_btn">Let's Connect <ArrowRightCircle size={25} /> </button>
                        </div>
                        <div class="col-md-12 col-lg-7">
                            <img src={HeaderImg} alt="header_img" />
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default Banner;