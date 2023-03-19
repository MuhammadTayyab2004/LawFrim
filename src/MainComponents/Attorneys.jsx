import React, { useEffect } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Attorney from "../Components/Attorney";
import Testimonials from "../Components/Testimonials";

function Attorneys() {

    useEffect(() => {
        document.title = 'LawFirm | Attorneys'
    }, []);

    return (
        <>
            <Navbar />
            <Attorney />
            <Testimonials />
            <Footer />
        </>
    );

}

export default Attorneys;
