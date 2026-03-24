import React, { useState } from 'react';
import CardInfo from '../AvailableCards/CardInfo';
import SelectCard from '../Selected/SelectCard';
import { FaReact } from "react-icons/fa";

const Card = ({k,coin}) => {

    const [info, setI] = useState([])
    const [showCall, setS] = useState("available")

    const h = (g) => {
        setI(c => c.includes(g) ? c : [...c,g])
    }

    const m = (e) => {
        setI(c => c.filter(v => v.player_name !== e))
    }

    return (
        <div className='max-w-[90%] mx-auto'>
            <div className='flex flex-col items-center gap-4 lg:flex-row lg:justify-between pt-10 lg:py-10'>
                <h2 className='font-semibold text-2xl'>{showCall==="available"? `Available players` : `selected player (${info.length}/6)`}</h2>
                <div className='flex gap-3'>
                    <h3 onClick={() => setS("available")} className={`${showCall==="available" ? 'btn btn-warning' : 'btn'} font-bold`}>Available</h3>
                    <h3 onClick={() => setS("selected")} className={`${showCall==="selected" ? 'btn btn-warning' : 'btn'} font-bold`}>Selected (<span>{info.length}</span>)</h3>
                </div>
            </div>

            {
                showCall==="available" && <CardInfo g={h} k={k} coin={coin}></CardInfo>
            }

            {
                showCall=== "selected" && (
                    info.length===0 ? 
                    <div className='flex justify-center my-10'>
                        <div className='space-y-4'>
                            <h2 className='text-4xl flex justify-center'><FaReact /></h2>
                            <h1 className='text-4xl font-semibold text-neutral/50'>No players select</h1>
                        </div>
                    </div>
                : <div className='flex flex-col gap-3'>
                    {
                        info.map((v,i) => <SelectCard key={i} {...v} m={m}></SelectCard>)
                    }
                </div>)
            }
                        
        </div>
    );
};

export default Card;