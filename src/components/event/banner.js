import { formatEventDateRange, formatEventDateRangeV2 } from "@/components/utils/formatEventDateRange";

export default function EventBanner({event}) {

    // const formattedDate = formatEventDateRange(event.startDate, event.endDate);
    const formattedDate = formatEventDateRangeV2(event.event_duration);
    

    return (
        <section className="innerbanner event-detail">
            <div className="home-bg"></div>
            <div className="innerbanner-bg">
                <div className="container">
                    <div className="banner-content text-center">
                        <div className="countdown bg-style">
                            <div className="counter-day">
                                <span className="days">00</span>
                                <div className="smalltext">Days</div>
                            </div>
                            <div className="counter-hour">
                                <span className="hours">00</span>
                                <div className="smalltext">Hours</div>
                            </div>
                            <div className="counter-minute">
                                <span className="minutes">00</span>
                                <div className="smalltext">Minutes</div>
                            </div>
                            <div className="counter-second">
                                <span className="seconds">00</span>
                                <div className="smalltext">Seconds</div>
                            </div>
                        </div>

                        <h1 className="banner-title">{ event.name }</h1>
                        <h2 className="banner-subtitle" dangerouslySetInnerHTML={{ __html: formattedDate }}></h2>
                        <h3 className="banner-desc">{ event.location }</h3>

                        <p className="banner-btn">
                            <a href="#" className="btn btn-primary">
                                Register Now
                            </a>
                            <a href="#" className="btn btn-primary">
                                Brochure
                            </a>
                            <a href="#" className="btn btn-primary">
                                Request Call Back
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}