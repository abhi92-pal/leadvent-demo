import Image from "next/image";

export default function Partner({ partner }) {
    return (
        <div className="sponsor-image">
            <h4>{ partner.name }</h4>
            <Image className="img-responsive" src={partner.logo} width={500} height={500} alt={ partner.name } />
        </div>
    );
}