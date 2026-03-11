import style from './card.module.css' ;
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function Card({venueName, imgSrc} : {venueName:string, imgSrc:string}) {
    return (
        <InteractiveCard>
        <div className='w-full h-[70%] rounded-lg relative'>
            <Image src={imgSrc} alt='meeting' fill={true} className='rounded-t-lg object-cover'/>
        </div>
        <div className='p-[10px] h-[30%]'>
            <div className='text-blue-700 font-semibold text-lg'>{venueName}</div>
            <p>Modern meeting room suitable for team discussions, workshops, and small business meetings.</p>
        </div>
        </InteractiveCard>

    ) ;
}