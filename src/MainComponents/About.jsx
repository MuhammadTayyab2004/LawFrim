import React, { useEffect } from "react";

import Navbar from "../Components/Navbar";
import AboutUs from "../Components/AboutUs";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

function About() {

    useEffect(() => {
        document.title = 'LawFirm | About'
    }, []);

    return (
        <>
            <Navbar />
            <AboutUs />
            <Testimonials />
            <Footer />
        </>
    );

}

export default About;
