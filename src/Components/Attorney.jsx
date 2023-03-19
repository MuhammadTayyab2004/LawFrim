import React from "react";
import AttorneysCard from "./AttorneysCard";
import AttorneysCardData from "./AttorneysCardsData";

function Attorneys() {

    return (
        <>
            <section className="Attorneys_section">
                <h1 className="text-center">Meet Our Attorneys</h1>
                <div className="Attorneys_container container">
                    {
                        AttorneysCardData.map((val) =>
                            <AttorneysCard
                                imgsrc={val.imgsrc}
                                title={val.attorneyname}
                                work={val.attorneywork}
                                key={val.id} />
                        )
                    }
                </div>
            </section>
        </>
    );

}

export default Attorneys;