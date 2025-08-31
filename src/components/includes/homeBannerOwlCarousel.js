'use client';

import { useEffect } from "react";

export default function HomeBannerOwlCarousel({events}){

    useEffect(() => {
		const interval = setInterval(() => {
			if (window.$ && $('.owl-carousel').owlCarousel) {
				// @ts-ignore
				$('#bannerContent').owlCarousel({
					loop: true,
					margin: 0,
					nav: false,
					autoplay: false,
					autoplayTimeout: 5000,
					autoplayHoverPause: true,
					nav: true,
					dots: false,
					loop: true,
					navText: ['<i className="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
					responsive: {
						0: {
							items: 1
						},
						600: {
							items: 1
						},

						1000: {
							items: 1
						}
					}
				});
				clearInterval(interval);
			}
		}, 100);

		return () => clearInterval(interval);
	}, []);

    return (
        <div className="owl-carousel owl-theme" id="bannerContent">
            {events.map((event, index) => (
                <div className="item" key={index}>
                    <div className="banner-content-wrap">
                        <h1 className="banner-title">{event.name}</h1>
                        <h2 className="banner-subtitle">21<sup>th</sup> - 22<sup>th</sup>  April, 2020</h2>
                        <h3 className="banner-desc">Capetown, South Africa</h3>
                        <p className="banner-btn">
                            <a href="#" className="btn btn-primary">Register Now</a>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}