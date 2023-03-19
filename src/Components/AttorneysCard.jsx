import React from "react";

import Icon1 from "../assets/img/icon1.svg";
import Icon2 from "../assets/img/icon2.svg";
import Icon3 from "../assets/img/icon3.svg";


function AttorneysCard(props) {
    return (
        <>
            <div className=" attorney_card ">
                <div className="card">
                    <img src={props.imgsrc} class="card-img-top" alt="card_img" />
                    <div className="card-body">
                        <h6 className="card-title">{props.title}</h6>
                        <small className="card-text" style={{ color: '#B8B8B8' }}>{props.work}</small>
                    </div>
                    <div className="contact_img">
                        <img src={Icon1} alt="contact_img" />
                        <br />
                        <img src={Icon2} alt="contact_img" />
                        <br />
                        <img src={Icon3} alt="contact_img" />
                    </div>


                </div>
            </div>
        </>
    )
}


export default AttorneysCard;