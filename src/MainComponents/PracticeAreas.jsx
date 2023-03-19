import React, { useEffect } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import PracticeAreaFull from "../Components/PracticeAreaFull";

function PracticeAreas() {

    useEffect(() => {
        document.title = 'LawFirm | PracticeArea'
    }, []);

    return (
        <>
            <Navbar />
            <PracticeAreaFull />
            <Testimonials />
            <Footer />
        </>
    );

}

export default PracticeAreas;
