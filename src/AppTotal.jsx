import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Card from './component/CardPlace/CardPlace';
import CardInfo from './component/AvailableCards/CardInfo';

const AppTotal = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Card></Card>
            
        </div>
    );
};

export default AppTotal;