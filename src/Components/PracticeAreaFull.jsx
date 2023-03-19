import React from "react";

import FamilyLaw from "../assets/img/family.png";
import CriminalLaw from "../assets/img/handcuffs.png";
import DrugLaw from "../assets/img/medicine.png";
import PropertyLaw from "../assets/img/buy-home.png";
import InsuranceLaw from "../assets/img/shield.png";
import SexualOffenses from "../assets/img/sexual-harassment.png";
import EmploymentLaw from "../assets/img/employee.png";
import BusinessLaw from "../assets/img/auction.png";
import FireAccident from "../assets/img/fire.png";
import FinancialLaw from "../assets/img/money.png";

import { NavLink } from "react-router-dom";

function PracticeAreaFull() {
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
                        <div className="col-md-12 col-lg-3 Practice_area_laws">
                            <img src={InsuranceLaw} alt="family_law" />
                            <h4>Insurance Law</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sequi quo labore odityewiu.</p>
                        </div>
                        <div className="col-md-12 col-lg-3 Practice_area_laws">
                            <img src={EmploymentLaw} alt="family_law" />
                            <h4>Employment Law</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sequi quo labore odityewiu.</p>
                        </div>
                        <div className="col-md-12 col-lg-3 Practice_area_laws">
                            <img src={BusinessLaw} alt="family_law" />
                            <h4>Business Law</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sequi quo labore odityewiu.</p>
                        </div>
                        <div className="col-md-12 col-lg-3 Practice_area_laws">
                            <img src={FinancialLaw} alt="family_law" />
                            <h4>Financial Law</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sequi quo labore odityewiu.</p>
                        </div>
                        <div className="col-md-12 col-lg-3 Practice_area_laws">
                            <img src={SexualOffenses} alt="family_law" />
                            <h4>SexualOffenses</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sequi quo labore odityewiu.</p>
                        </div>
                        <div className="col-md-12 col-lg-3 Practice_area_laws">
                            <img src={FireAccident} alt="family_law" />
                            <h4>FireAccident</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sequi quo labore odityewiu.</p>
                        </div>

                    </div>

                    <button className="btn_common mt-5">
                        <NavLink to='/practicearea' className='nav_link_btn text-white text-decoration-none'>Practice Area</NavLink>
                    </button>

                </div>
            </section>
        </>
    );
}

export default PracticeAreaFull;