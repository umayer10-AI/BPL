import React from 'react';
import { MdDelete } from "react-icons/md";

const SelectCard = ({player_image,player_name,batting_style}) => {
    console.log(player_image)
    return (
        <div className='flex justify-between items-center border border-gray-300 rounded-xl p-4'>
            <div className='flex justify-center items-center gap-4'>
                <div>
                    <img className='h-15 w-15 object-cover rounded-xl' src={player_image} alt="" />
                </div>
                <div>
                    <h2 className='text-xl font-bold'>{player_name}</h2>
                    <p className='text-neutral/50'>{batting_style}</p>
                </div>
            </div>
            <div>
                <h2 className='text-2xl text-red-500 mr-4'><MdDelete /></h2>
            </div>
        </div>
    );
};

export default SelectCard;