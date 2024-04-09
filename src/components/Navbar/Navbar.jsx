import React from 'react'
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-grey10 py-[14px] px-[80px] text-white font-medium text-sm'>
            <div className='flex items-center'>
                <img src={logo} alt="" />
                <p>Estatein</p>
            </div>
            <ul className='flex gap-6 items-center'>
                <li className='rounded-lg bg-grey8 px-[20px] py-[12px] border border-grey15 border-inside'><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Properties</a></li>
                <li><a href="">Service</a></li>
            </ul>
            <div>
                <button className='rounded-lg bg-grey8 px-[20px] py-[12px] border border-grey15 border-inside'>Contact Us</button>
            </div>
        </nav>
    )
}

export default Navbar
