import { notFound } from "next/navigation";
import * as ApiRoute from '@/routes/index';
import EventBanner from "@/components/event/banner";
import Speakers from "@/components/speaker/speakers";
import AboutEvent from "@/components/event/about";
import Partners from "@/components/partner/partners";
import EventSpecifications from "@/components/event/event-specification";

export default async function EventDetails({ params }) {
	const { slug } = await params;
	if (!slug) {
		notFound();
	}

	const res = await fetch(ApiRoute.API_EVENT_DETAILS_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ slug }), // pass slug in body
		next: { revalidate: 60 }, // ISR
	});
	
	if (!res.ok) {
		notFound();
	}

	let eventResponse = await res.json();
	let event = eventResponse.data.event;
	let speakers = eventResponse.data.speaker_hubs;
	let partners = eventResponse.data.partners;
	

	return (
		<>
			<EventBanner event={event} />
			<Speakers speakers={speakers} />
			<AboutEvent event={event} />
			<Partners partners={partners} />
			<EventSpecifications event={event} />
		</>
	);
}