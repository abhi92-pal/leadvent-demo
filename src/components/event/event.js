import Image from "next/image";
import Link from "next/link";

import { formatEventDateRange, formatEventDateRangeV2 } from '@/components/utils/formatEventDateRange';


const Event = ({ singleEvent }) => {
    // const formattedDate = formatEventDateRange(singleEvent.start_date, singleEvent.end_date);
    const formattedDate = formatEventDateRangeV2(singleEvent.event_duration);

    return (
        <>
            <div className="blogpart text-center">
                <Link href={`/events/${singleEvent.slug}/details`}>
                    <div className="blogpic">
                        <Image className="lazy-load" alt="Blog Post"
                            src={singleEvent.photo}
                            style={{ display: 'inline-block' }}
                            width={300}
                            height={200}
                        />
                    </div>
                    <div className="textblog">
                        <h5 className="dateblog" dangerouslySetInnerHTML={{ __html: formattedDate }} />
                        <h4 className="bloghead">{singleEvent.name}</h4>
                        <ul className="event-location pl-0">
                            <li><i className="fa fa-globe mr-5"></i>{singleEvent.location}</li>
                        </ul>
                    </div>
                    <div className="blog-arrow">
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Event;