import React from 'react';
import img from "../../assets/logo.png"
import { CirclePoundSterling } from 'lucide-react';
import { TbCoinTakaFilled } from "react-icons/tb";

const Navbar = ({coin}) => {
    return (
        <div className='sticky top-0 z-50'>
            <div className="bg-base-100 shadow-sm px-14 py-2 flex flex-col lg:flex-row items-center justify-between mb-3">
                <div className="">
                    <img className='w-[80%]' src={img} alt="" />
                </div>
                <div className="">
                    <ul className="menu flex-row flex-wrap gap-3 justify-center font-semibold">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                        <li className='border rounded-xl font-bold text-base'><a><span>{coin}</span> coin <TbCoinTakaFilled /> </a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;