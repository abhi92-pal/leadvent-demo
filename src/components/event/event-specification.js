export default function EventSpecifications({ event }) {
    return (
        <>
            <section className="event-tab">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 tabview-center">
                            {/* <h2 className="section-title">Event Details</h2> */}
                            <p className="section-sub-title">Event Details</p>
                        </div>
                        <div className="col-sm-6 tabview-center text-right mt-15">
                            <a className="btn btn-primary" href="#">Request Brochure</a>
                        </div>
                    </div>

                    <div className="row">
                        <aside className="col-md-3 col-sm-4 left-tab">
                            <div>
                                <ul className="nav nav-tabs">
                                    <li className="active"><a data-toggle="tab" href="#home">Event Details</a></li>
                                    <li><a data-toggle="tab" href="#menu1">Meeting Summary</a></li>
                                    <li><a data-toggle="tab" href="#menu2">Key Topics &amp; Discussions</a></li>
                                    <li><a data-toggle="tab" href="#menu3">Schedule</a></li>
                                    <li><a data-toggle="tab" href="#menu4">Key Learning Benefits</a></li>
                                    <li><a data-toggle="tab" href="#menu5">Reasons to attend</a></li>
                                    <li><a data-toggle="tab" href="#menu6">Explore</a></li>
                                    <li><a data-toggle="tab" href="#menu7">Venue</a></li>
                                    <li><a data-toggle="tab" href="#menu8">Contact</a></li>
                                </ul>
                            </div>
                        </aside>

                        <div className="col-md-9 col-sm-8">
                            <div className="tab-content">
                                <div id="home" className="tab-pane fade in active">
                                    <div className="tab-card">
                                        <h3>About the forum</h3>
                                        <div dangerouslySetInnerHTML={{ __html: event.event_details }} />
                                    </div>
                                </div>

                                <div id="menu1" className="tab-pane fade">
                                    <div className="tab-card">
                                        <h3>Meeting Summary</h3>
                                        <div dangerouslySetInnerHTML={{ __html: event.meeting_summary }} />
                                    </div>
                                </div>

                                <div id="menu2" className="tab-pane fade">
                                    <div className="tab-card">
                                        <h3>Key Topics &amp; Discussions</h3>
                                        <ul className="list-style" dangerouslySetInnerHTML={{ __html: event.key_topics_and_discussions }} />
                                    </div>
                                </div>

                                <div id="menu3" className="tab-pane fade">
                                    <div className="tab-card">
                                        <div className="timeline-group">
                                            <div className="timeline-label">30 March 2020</div>
                                            <div className="timeline-item">
                                                <div className="timeline-time">Day 1</div>
                                                <div className="timeline-body">
                                                    <h4>Bharat Soni | Chief Information Security Officer, GT Bank Plc</h4>
                                                    <div className="case-block">
                                                        <div className="case-person">
                                                            <img src="/images/gallery/gallery1.jpg" alt="gallery1" />
                                                        </div>
                                                        <div className="case-detail">
                                                            <h4>Constantinos Peonides</h4>
                                                            <h5>Director, CYZ Company</h5>
                                                            <div className="case-logo">
                                                                {/* <img src="https://bisgrp.com/wp-content/uploads/2019/12/alectris-logo_1_80x80.png" alt="logo" /> */}
                                                            </div>
                                                        </div>
                                                        <div className="case-content">
                                                            <h4>Asset Management Best Practices with the help of Digitalization</h4>
                                                            <ul>
                                                                <li>What do we mean by Asset Management</li>
                                                                <li>What do we mean by Asset Management</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="timeline-label">31 March 2020</div>
                                            <div className="timeline-item">
                                                <div className="timeline-time">Day 2</div>
                                                <div className="timeline-body">
                                                    <h4>Bharat Soni | Chief Information Security Officer, GT Bank Plc</h4>
                                                    <div className="case-block">
                                                        <div className="case-person">
                                                            <img src="/images/gallery/gallery1.jpg" alt="gallery2" />
                                                        </div>
                                                        <div className="case-detail">
                                                            <h4>Constantinos Peonides</h4>
                                                            <h5>Director, CYZ Company</h5>
                                                            <div className="case-logo">
                                                                {/* <img src="https://bisgrp.com/wp-content/uploads/2019/12/alectris-logo_1_80x80.png" alt="logo2" /> */}
                                                            </div>
                                                        </div>
                                                        <div className="case-content">
                                                            <h4>Asset Management Best Practices with the help of Digitalization</h4>
                                                            <ul>
                                                                <li>What do we mean by Asset Management</li>
                                                                <li>What do we mean by Asset Management</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="mt-20">For more information, request full agenda</h4>
                                        <button type="button" className="btn btn-primary">Request Agenda</button>
                                    </div>
                                </div>

                                <div id="menu4" className="tab-pane fade">
                                    <div className="tab-card">
                                        <h3>Key Learning Benefits</h3>
                                        <ul className="list-style" dangerouslySetInnerHTML={{ __html: event.key_learning_benefits }} />
                                    </div>
                                </div>

                                <div id="menu5" className="tab-pane fade">
                                    <div className="tab-card">
                                        <h3>Reasons to attend</h3>
                                        <ul className="list-style">
                                            <li><strong>Assess</strong> a world-class platform to exhibit your products, services, innovations and ideas</li>
                                            <li><strong>Participate </strong>in the special workshop/symposium, B2B and interactive sessions with industry sponsors and exhibitors</li>
                                            <li><strong>Promote</strong> Cybersecurity governance from the C-Suite level of every organization</li>
                                            <li><strong>Secure </strong>and maximize the return on investment (ROI) of your next project</li>
                                            <li><strong>Boost </strong>your expertise about the advanced innovation in cybersecurity and fraud prevention</li>
                                            <li><strong>Discover</strong> the technical know-how to use security technology to improve operations, innovate, or grow</li>
                                            <li><strong>Identify</strong> potential business risks</li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="menu6" className="tab-pane fade">
                                    <div className="tab-card">
                                        <h3>Explore</h3>
                                        <h4>Explore our Event &amp; Matchmaking App and Improve your Interaction at MJDvent Conference Schedule your meetings in advance!</h4>
                                        <p>At the MJDvent conference you can request and organize your appointments by using a matchmaking app. Through the networking tool, each participant can create an individual profile. Guided by categories and keywords, attendees can search, find and approach interesting contacts. There will also be a networking area provided at the event of the conference. Your profile data and the details you provide are visible exclusively for registered participants within the event. You will oversee the information you would like to present and to whom. Our matchmaking app will be activated approximately one month prior to the conference and you will be notified vie e-mail as soon as you can start using the matchmaking App and can then set up your personal profile.</p>
                                    </div>
                                </div>

                                <div id="menu7" className="tab-pane fade">
                                    <div className="tab-card">
                                        <h3>Venue</h3>
                                        dummy content
                                    </div>
                                </div>

                                <div id="menu8" className="tab-pane fade">
                                    <div className="tab-card">
                                        <h3>Contact</h3>
                                        dummy content
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row three-btn text-center pt-30">
                        <div className="col-sm-4">
                            <a className="package-btn" href="#">Request Brochure</a>
                        </div>
                        <div className="col-sm-4">
                            <h2 className="section-title">Refer a colleague</h2>
                            <a href=""><p>Click Here</p></a>
                        </div>
                        <div className="col-sm-4">
                            <a className="package-btn" href="#">Pre-Registration</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}