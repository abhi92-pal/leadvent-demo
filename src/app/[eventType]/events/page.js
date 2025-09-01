import { notFound } from "next/navigation";
import * as ApiRoute from '@/routes/index';
import Event from "@/components/event/event";

export default async function EventList({ params }) {
    const {eventType} = await params;
    let res;
    if (eventType == 'upcoming') {
        res = await fetch(ApiRoute.API_UPCOMING_EVENTS_URL, {
            next: { revalidate: 300 },
            headers: { Accept: "application/json" },
        });
    } else if (eventType == 'past') {
        res = await fetch(ApiRoute.API_PAST_EVENTS_URL, {
            next: { revalidate: 300 },
            headers: { Accept: "application/json" },
        });
    } else {
        notFound();
    }

    if (!res.ok) {
        console.error("Failed to fetch events:", res.status);
        notFound();
    }
    
    let eventResponse = await res.json();
    let events = eventResponse.data.events;

    return (
        <>
            <section className="innerbanner">
                <div className="home-bg"></div>
                <div className="innerbanner-bg">
                    <div className="container">
                        <div className="banner-content text-center">
                            <h1 className="banner-title">Explore Events</h1>
                            <h2 className="banner-subtitle">lprem ipsum is dummy</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-list pt-60">
                <div className="container">
                    <div className="white-card">
                        <form action="#">
                            <div className="form-border">
                                <div className="cc-width">
                                    <label>Event</label>
                                    <div className="single-register">
                                        <i className="fa fa-list"></i>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Event name"
                                        />
                                    </div>
                                </div>

                                <div className="cc-width">
                                    <label>Category</label>
                                    <div className="single-register">
                                        <i className="fa fa-anchor"></i>
                                        <select className="form-control" id="category">
                                            <option>Business</option>
                                            <option>Finance</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="cc-width">
                                    <label>Location</label>
                                    <div className="single-register">
                                        <i className="fa fa-globe"></i>
                                        <select className="form-control" id="location">
                                            <option>Kenya</option>
                                            <option>South Africa</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="cc-width">
                                    <label>Status</label>
                                    <div className="single-register">
                                        <i className="fa fa-bookmark"></i>
                                        <select className="form-control" id="status">
                                            <option>Upcoming</option>
                                            <option>Past</option>
                                            <option>Current</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-30">
                                <a href="#" className="btn btn-primary">
                                    Search Event
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {events.length ? (
                            events.map((event, i) => (
                                <div key={i} className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <Event singleEvent={event} />
                                </div>
                            ))
                        ) : (
                            <p>No events found</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}