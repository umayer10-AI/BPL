import React, { useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import CardPlace from './component/CardPlace/CardPlace';
import { ToastContainer} from 'react-toastify';

const AppTotal = () => {

    const [coin,setCoin] = useState(1000000)

    const k = (e) => {
        setCoin(c => {
            const n = c - Number(e);
            return n<0 ? c : n
        })
    }

    return (
        <div>
            <Navbar coin={coin}></Navbar>
            <Hero></Hero>
            <CardPlace k={k} coin={coin} setCoin={setCoin}></CardPlace>
            <ToastContainer />
        </div>
    );
};

export default AppTotal;