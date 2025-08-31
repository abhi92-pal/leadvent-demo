'use client';

import { useState } from "react";
import Speaker from "./speaker";

export default function Speakers({ speakers }) {
    const [viewMore, setViewMore] = useState(false);
    const visibleSpeakers = viewMore ? speakers : speakers.slice(0, 6);

    return (
        <section className="event-speakers pt-70 mb-20">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 tabview-center">
                        <h2 className="section-title">lorem ipsum is dummy</h2>
                        <h3 className="section-sub-title">Speakers</h3>
                    </div>
                    <div className="col-sm-6 tabview-center text-right mt-15">
                        <a className="btn btn-primary" href="#">
                            Become A Speaker
                        </a>
                    </div>
                </div>

                <div className="row">
                    {speakers.length > 0 ? (
                        visibleSpeakers.map((speaker, i) => (
                            <div key={i} className="col-md-4 col-sm-6 col-xs-12">
                                <Speaker speaker={speaker} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center w-full">No speakers available</p>
                    )}
                </div>

                {speakers.length && (
                    <div className="mt-30 text-center">
                        <button className="btn btn-primary" onClick={() => setViewMore(!viewMore)} type="button">
                            {viewMore ? 'Show Less Speakers' : 'Show All Speakers'}
                            <i className="fa fa-angle-double-down ml-5"></i>
                        </button>
                    </div>)
                }

            </div>
        </section>
    );
}