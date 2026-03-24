import React, { useState } from 'react';
import CardInfo from '../AvailableCards/CardInfo';
import SelectCard from '../Selected/SelectCard';

const Card = () => {

    const [f, setF] = useState("available")
    const [n, setN] = useState("Available Players")
    const [info, setI] = useState([])

    const a = () => {
        setF("available")
        setN("Available Players")
    }
    const b = () => {
        setF("selected")
        setN(`Selected Player (${info.length}/6)`)
    }

    const h = (g) => {
        console.log(g)
        setI(c => info.includes(g) ? c : [...c,g])
    }

    return (
        <div className='max-w-[90%] mx-auto'>
            <div className='flex justify-between py-10'>
                <h2 className='font-semibold text-2xl'>{n}</h2>
                <div className='flex gap-3'>
                    <h3 onClick={a} className={`${f==="available" ? 'btn btn-warning' : 'btn'} font-bold`}>Available</h3>
                    <h3 onClick={b} className={`${f==="selected" ? 'btn btn-warning' : 'btn'} font-bold`}>Selected (<span>{info.length}</span>)</h3>
                </div>
            </div>

            <CardInfo g={h}></CardInfo>

            {
                info.map((v,i) => <SelectCard key={i} {...v}></SelectCard>)
            }
        </div>
    );
};

export default Card;