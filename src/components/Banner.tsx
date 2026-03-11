import Image from "next/image";
import style from "./banner.module.css" ;

export default function Banner() {
    return (
        <div className={style.banner}>
            <Image src='/img/banner.jpg' alt="cover" fill={true} objectFit="cover" priority/>
            <div className={style.bannertext}>
                <h1 className="font-bold text-4xl">where every event finds its venue</h1>
                <h3 className="font-serif">Book the Perfect Venue for Meetings, Conferences, and Events</h3>
            </div>
        </div>
    ) ;
}