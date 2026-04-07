import React from 'react';
import { motion } from "framer-motion"
import heroImg from "../../assets/apps-img/hero.png";

const Banner = () => {
    return (
        <motion.div 
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className='min-h-[90vh] container mx-auto pt-6 space-y-3'>
            <div className='text-center space-y-4 '>
                <h1 className='font-bold text-3xl lg:text-4xl'>We Build <br /> <span className='text-[#1a2980]'>Productive</span> Apps</h1>
                <p className='text-gray-500 w-2/3 text-center mx-auto'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <button className='btn font-bold  border-gray-300'>Play Store</button>
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <button className='btn border border-gray-300 font-bold'>Apple Store</button>
                </a>
            </div>
            <div className='flex items-center justify-center'>
                <img src={heroImg}  alt="" />
            </div>
           
        </motion.div>
    );
};

export default Banner;