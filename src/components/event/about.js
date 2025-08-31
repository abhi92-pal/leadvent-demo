'use client';

import Image from "next/image";
import { useState } from "react";

export default function AboutEvent({ event }) {
    const [expanded, setExpanded] = useState(false);

    // adjust character limit as needed
    const limit = 300;
    const content = event.about_event || "";

    const shortContent = content.length > limit
        ? content.slice(0, limit) + "..."
        : content;

    return (
        <section className="collage-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <h2 className="intro-title">About Event ({event.hashtags})</h2>
                        <div dangerouslySetInnerHTML={{ __html: expanded ? content : shortContent }} />
                        {content.length > limit && (
                            <button
                                className="btn btn-link mt-2"
                                onClick={() => setExpanded(!expanded)}
                            >
                                {expanded ? "Read Less" : "Read More"}
                            </button>
                        )}
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="collage-img">
                            {event.about_photo ? (
                                <Image
                                    src={event.about_photo}
                                    alt="image"
                                    title="image"
                                    width={555} height={416}
                                />
                            ) : (
                                <video loop muted autoPlay>
                                    <source src={event.about_video} type="video/mp4" />
                                </video>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
