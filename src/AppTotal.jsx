import React, { useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Card from './component/CardPlace/CardPlace';

const AppTotal = () => {

    const [coin,setCoin] = useState(1000000)

    const k = (e) => {
        setCoin(c => c-e)
    }

    return (
        <div>
            <Navbar coin={coin}></Navbar>
            <Hero></Hero>
            <Card k={k}></Card>
        </div>
    );
};

export default AppTotal;