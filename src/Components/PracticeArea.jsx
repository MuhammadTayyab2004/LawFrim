import React from "react";

import FamilyLaw from "../assets/img/family.png";
import CriminalLaw from "../assets/img/handcuffs.png";
import DrugLaw from "../assets/img/medicine.png";
import PropertyLaw from "../assets/img/buy-home.png";
import { NavLink } from "react-router-dom";

function PracticeArea() {
    return (
        <>
            <section className="Practice_area">
                <div className="container text-center">
                    <h1>Practice Areas</h1>
                    <div className="row">

                        <div className="col-md-12 col-lg-3 Practice_area_laws">
                            <img src={FamilyLaw} alt="family_law" />
                            <h4>Family Law</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sequi quo labore odityewiu.</p>
                        </div>
                        <div className="col-md-12 col-lg-3 Practice_area_laws">
                            <img src={CriminalLaw} alt="family_law" />
                            <h4>Criminal Law</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sequi quo labore odityewiu.</p>
                        </div>
                        <div className="col-md-12 col-lg-3 Practice_area_laws">
                            <img src={DrugLaw} alt="family_law" />
                            <h4>Drug Law</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sequi quo labore odityewiu.</p>
                        </div>
                        <div className="col-md-12 col-lg-3 Practice_area_laws">
                            <img src={PropertyLaw} alt="family_law" />
                            <h4>Property Law</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sequi quo labore odityewiu.</p>
                        </div>

                    </div>

                    <button className="btn_common mt-5">
                        <NavLink to='#' className='text-white nav_link_btn text-decoration-none'>Practice Area</NavLink>
                    </button>

                </div>
            </section>
        </>
    );
}

export default PracticeArea;