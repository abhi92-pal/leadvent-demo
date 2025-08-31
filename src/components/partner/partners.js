'use client';

import { useState } from "react";
import Partner from "./partner";

export default function Partners({ partners }) {
    const [viewMore, setViewMore] = useState(false);
    const visiblePartners = viewMore ? partners : partners.slice(0, 6);

    return (
        <section className="ts-sponsors">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 tabview-center mt-20">
                        <a className="btn btn-primary" href="#">Become A Sponsor</a>
                    </div>
                    <div className="col-sm-4 tabview-center text-center">
                        <h2 className="section-title">Event Partners</h2>
                        <p className="section-sub-title">Our Sponsors and Partners</p>
                    </div>
                    <div className="col-sm-4 tabview-center text-right mt-20">
                        <a className="btn btn-primary" href="#">Become Media Partner</a>
                    </div>
                </div>

                <div className="row text-center">
                    {partners.length > 0 ? (
                        visiblePartners.map((partner, i) => (
                            <div key={i} className="col-xs-6 col-sm-3 col-md-2">
                                <Partner partner={partner} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center w-full">No partners available</p>
                    )}
                </div>

                {partners.length && (<div className="mt-30 text-center">
                    <button className="btn btn-primary" onClick={() => setViewMore(!viewMore)}>{viewMore ? 'View Less' : 'View More'}</button>
                </div>)
                }
            </div>
        </section>
    );
}