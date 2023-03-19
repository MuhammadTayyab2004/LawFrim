import React, { useEffect } from "react";


import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import PracticeArea from "../Components/PracticeArea";
import AboutUs from "../Components/AboutUs";
import Attorneys from "../Components/Attorney";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

function Home() {

    useEffect(() => {
        document.title = 'LawFirm | Home'
    }, []);

    return (
        <>
            <Navbar />
            <Banner />
            <PracticeArea />
            <AboutUs />
            <Attorneys />
            <Testimonials />
            <Footer />
        </>
    );

}

export default Home;
