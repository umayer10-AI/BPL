import React, { useState } from 'react';
import { UserRound } from 'lucide-react';
import { FaFlag } from "react-icons/fa";
import { toast,Bounce } from 'react-toastify';

const CardInfoMore = ({p,g,k,coin}) => {

    const [isSelected, setS] = useState(false)

    return (
        <div>
            <div className='border border-gray-300 p-4 space-y-1 rounded-2xl h-full'>
                <img  className='w-full max-h-50 object-cover mx-auto rounded-2xl' src={p.player_image} alt="" />
                <h2 className='flex gap-3 font-semibold mt-3'><UserRound /> {p.player_name}</h2>
                <div className='flex gap-3 items-center justify-between'>
                    <p className='flex gap-3 items-center'><FaFlag></FaFlag>{p.player_country}</p>
                    <button className='btn btn-outline'>{p.playing_role}</button>
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
                    <button onClick={() => {
                        if(coin < Number(p.price)){
                            toast('Not enough coin!', {
                                    position: "top-center",
                                    autoClose: 500,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                    transition: Bounce
                                });
                            return;
                        }
                        g(p)
                        setS(true) 
                        k(Number(p.price));
                        toast(`${p.player_name} is selected`, {
                                position: "top-center",
                                autoClose: 500,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                                transition: Bounce
                            });
                    }} className={`text-base btn text-white ${isSelected? "btn-success" : "btn-info"}`}>{isSelected ? 'Selected': 'Choose Player'}</button>
                     {/* disabled={isSelected} */}
                     
                </div>
            </div>
        </div>
    );
};

export default CardInfoMore;