import Event from "@/components/event/event";
import Link from "next/link";
import * as ApiRoute from '@/routes/index';
import HomeBannerOwlCarousel from "@/components/includes/homeBannerOwlCarousel";

export default async function Home() {
	const res = await fetch(ApiRoute.API_UPCOMING_EVENTS_URL, {
		next: { revalidate: 300 },
	});
	let upcomingEvents = await res.json();
	upcomingEvents = upcomingEvents.data.events.slice(0, 3);

	return (
		<>
			<section id="banner">
				<div className="banner-item bg-overlay">
					<div id="videoWrap1">
						<video
							id="myVideo1"
							autoPlay
							loop
							muted
							playsInline
							poster="/images/mjd-logo.png"
							style={{ width: "100%", height: "auto" }}
						>
							<source
								src="/banner_video.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</div>
					<div className="banner-section">
						<div className="container">
							<div className="banner-content text-center">
								<HomeBannerOwlCarousel events={upcomingEvents} />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Section banner end */}
			<section id="ts-intro" className="ts-intro">
				<div className="container">
					<div className="row">
						{/* Left Column */}
						<div className="col-xs-12 col-sm-12 col-md-6">
							{/* <div className="gap-60"></div> */}
							<h2 className="intro-title">Who We Are</h2>
							<h3 className="title-classic left">About MJDVENT</h3>
							<p className="intro-desc">
								MJDvent is a conference production and management company operating in Europe and Africa
								and specializing in organization of educational business meetings and conferences. We can
								support and provide you with the best practices necessary for staying successful in today’s
								progressive market.
							</p>
							<blockquote>
								<b>MJDvent</b> was established with an intention to spread the knowledge and exclusive
								insights of leading industry experts with a wider audience. At MJDvent, we believe that
								continuous learning is vital for achieving your set objectives and keeping up with the
								growing competition. Becoming a part of our community of experts will allow you to connect
								regularly through annual meetings and address industry challenges together with your
								colleagues from all over the world.
							</blockquote>
						</div>

						{/* Right Column */}
						<div className="col-xs-12 col-sm-12 col-md-6">
							<div className="intro-video">
								{/* Instead of old <a>/<img>, we directly embed YouTube iframe */}
								<iframe
									width="100%"
									height="304"
									src="https://www.youtube.com/embed/7WcdjUl7PWE"
									title="MJDVENT Video"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="theblog">

				<div className="container">
					<div className="row">

						<div className="text-center">
							<h2 className="section-sub-title">Upcoming Events</h2>
						</div>
						{upcomingEvents.map((upcomingEvent) => (
							<div key={upcomingEvent.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
								<Event singleEvent={upcomingEvent} />
							</div>
						))}
					</div>

					<div className="mt-30 text-center">
						<Link className="btn btn-primary" href="#">View All Events</Link>
					</div>
				</div>
			</section>

		</>
	);
}

// export async function getStaticProps() {
// 	const res = await fetch("https://www.leadventgrp.com/api/upcoming-events");
// 	const data = await res.json();

// 	return {
// 		props: { data },
// 		revalidate: 60, // page regenerates in background every 60s
// 	};
// }
