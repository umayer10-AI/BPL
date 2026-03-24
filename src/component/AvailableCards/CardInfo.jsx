import React, { useEffect, useState } from 'react';
import CardInfoMore from './CardInfoMore';
import axios from "axios"

const CardInfo = ({g,k,coin}) => {

    const [c,setC] = useState([]);
    const [loading, setL] = useState(true)

    useEffect(() => {
        const a = async() => {
            try{
                setL(true)
                const f = await axios.get("Players.json")
                setC(f.data)
            }
            finally{
                setL(false)
            }
        }
        a();
    },[])

    if(loading) return <span className="loading loading-spinner text-primary text-4xl font-bold text-center my-10"></span>

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {
                    c.map((v,i) => <CardInfoMore key={i} p={v} g={g} k={k} coin={coin}></CardInfoMore>)
                }
            </div>
        </div>
    );
};

export default CardInfo;