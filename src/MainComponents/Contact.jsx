import React, { useEffect } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactUs from "../Components/ContactUs";

function Contact() {

    useEffect(() => {
        document.title = 'LawFirm | Contact'
    }, []);

    return (
        <>
            <Navbar />
            <ContactUs />
            <Footer />
        </>
    );

}

export default Contact;
