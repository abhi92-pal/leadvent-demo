import Image from "next/image";

export default function Speaker({ speaker }) {
    return (
        <div className="bar_tenders_profile_area">
            <div className="bar_tenders_profile_image">
                <Image src={speaker.photo} fill alt="Speaker" />
            </div>
            <div className="bar_tenders_profile_content">
                <h4>{ speaker.name }</h4>
                <div className="clearfix mb-5">
                    <div className="company-logo">
                        <Image
                            src={speaker.company_logo}
                            alt="Company Logo"
                            width={15} height={15}
                        />
                    </div>
                    <div className="company-text">
                        <h4>{ speaker.company_name }</h4>
                        <h5>{ speaker.designation }</h5>
                    </div>
                </div>

                <a href="#">
                    <Image src="/images/linkedin-logo.jpg" alt="LinkedIn" width={60} height={15} />
                </a>
                <a href="#" className="show-bio">
                    Show Bio
                </a>
            </div>

            <svg
                id="Capa_1"
                viewBox="0 0 29.107 29.107"
                style={{ enableBackground: "new 0 0 29.107 29.107" }}
                xmlSpace="preserve"
            >
                <g>
                    <g id="c147_full_moon">
                        <g>
                            <path d="M14.554,0C6.561,0,0,6.562,0,14.552c0,7.996,6.561,14.555,14.554,14.555c7.996,0,14.553-6.559,14.553-14.555 C29.106,6.562,22.55,0,14.554,0z"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
}