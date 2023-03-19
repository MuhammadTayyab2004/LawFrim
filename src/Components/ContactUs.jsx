import React from "react";

import ContactImg from "../assets/img/contact-img.svg";

function ContactUs() {
    return (
        <>
            <section className="contact container">
                <div class="row ">
                    <div class="col-md-12 col-lg-5 py-5 mt-4">
                        <img src={ContactImg} alt="ContactImg" />
                    </div>
                    <div class="col-md-12 col-lg-7">
                        <h1>Get In Touch</h1>
                        <form class="contact-form">
                            <div class="form-name">
                                <input type="text" name="First Name" placeholder="First Name" autoComplete='off' required />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" name="Last Name" placeholder="Last Name" autoComplete='off' required />
                            </div>
                            <div class="form-name">
                                <input type="email" name="Email Address" placeholder="Email Address" autoComplete='off' required /> &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="number" name="Phone No" placeholder="Phone No." autoComplete='off' required />
                            </div>
                            <textarea name="Message" rows="7" placeholder="Message" ></textarea>

                            <div className="contact_btn">
                                <button type='text' className='btn_connect'>
                                    <span>Send Message</span>
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </section>

        </>
    );
}

export default ContactUs;