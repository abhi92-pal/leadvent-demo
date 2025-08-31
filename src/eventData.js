const data = [
			{
				id: 1,
				title: "3rd Annual Advanced Biofuels Forum",
				image: "https://www.leadventgrp.com/public/images/events/thumb_photo61b7b65303718.PNG",
				startDate: "2025-10-01",
				endDate: "2025-10-02",
				city: "Amsterdam",
				country: "Netherlands",
				link: "https://www.leadventgrp.com/events/3rd-annual-advanced-biofuels-forum/details",
				slug: "3rd-annual-advanced-biofuels-forum",
			},
			{
				id: 2,
				title: "2nd Annual World e-Fuels Summit",
				image: "https://www.leadventgrp.com/public/images/events/thumb_photo64de81460e538.png",
				startDate: "2025-10-14",
				endDate: "2025-10-15",
				city: "Amsterdam",
				country: "Netherlands",
				link: "https://www.leadventgrp.com/events/3rd-annual-advanced-biofuels-forum/details",
				slug: "2nd-annual-world-e-fuels-summit",
			},
			{
				id: 3,
				title: "3rd Annual Energy and Utilities Cyber Security Forum",
				image: "https://www.leadventgrp.com/public/images/events/thumb_photo5ef65b3c2bf05.jpg",
				startDate: "2025-10-21",
				endDate: "2025-10-22",
				city: "Amsterdam",
				country: "Netherlands",
				link: "https://www.leadventgrp.com/events/3rd-annual-advanced-biofuels-forum/details",
				slug: "3rd-annual-energy-and-utilities-cyber-security-forum",
			},
		];

export function getAllEvents(){
	return data;
}

export function getAnEvent(slug){
	return data.find(event => event.slug === slug);
}