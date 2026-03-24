import React from 'react';
import img from "../../assets/logo.png"
import { CirclePoundSterling } from 'lucide-react';

const Navbar = () => {
    return (
        <div className=''>
            <div className="bg-base-100 shadow-sm px-14 flex flex-col lg:flex-row items-center justify-between">
                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="">
                    <ul className="menu flex-row flex-wrap gap-3 justify-center">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                        <li className='border rounded-xl'><a><span>0</span> coin <CirclePoundSterling size={16} strokeWidth={1.50} /> </a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;