import React from 'react';
import img from "../../assets/banner-main.png"

const Hero = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            <div className={`img text-center space-y-2 py-10 rounded-2xl`}>
                <img className='w-[10%] mx-auto' src={img} alt="" />
                <h2 className='text-3xl font-semibold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-lg text-neutral/50 font-semibold'>Beyond Boundaries Beyond Limits</p>
                <button className="btn btn-active btn-warning">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Hero;