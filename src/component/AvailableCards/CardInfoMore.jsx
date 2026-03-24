import React, { useState } from 'react';
import { UserRound } from 'lucide-react';
import { Flag } from 'lucide-react';
import { FaFlag } from "react-icons/fa";

const CardInfoMore = ({p,g,k}) => {

    const [isSelected, setS] = useState(false)

    return (
        <div>
            <div className='border border-gray-300 p-4 space-y-1 rounded-2xl h-full'>
                <img  className='w-full max-h-50 object-cover mx-auto rounded-2xl' src={p.player_image} alt="" />
                <h2 className='flex gap-3 font-semibold mt-3'><UserRound /> {p.player_name}</h2>
                <div className='flex gap-3 items-center justify-between'>
                    <p className='flex gap-3 items-center'><FaFlag></FaFlag>{p.player_country}</p>
                    <button className='btn'>{p.playing_role}</button>
                </div>
                <hr  className='text-gray-300 my-3'/>
                <div className='font-semibold flex justify-between items-center'>
                    <h2>Rating</h2>
                    <h2>{p.rating}</h2>
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold'>{p.batting_style}</h2>
                    <h2 className='font-semibold'>{p.bowling_style}</h2>
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold'>Price: <span>{p.price}</span> BDT</h2>
                    <button onClick={() => {g(p)
                        setS(true) 
                        k(p.price)
                    }} className={`text-base btn text-white ${isSelected? "btn-success" : "btn-info"}`}>{isSelected ? 'Selected': 'Choose Player'}</button>
                     {/* disabled={isSelected} */}
                </div>
            </div>
        </div>
    );
};

export default CardInfoMore;