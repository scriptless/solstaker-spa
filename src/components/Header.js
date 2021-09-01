import React, { Component } from 'react';
import Navbar from './Navbar';

class Header extends Component {
  render() {
    return <section className="bg-gradient-to-b from-gray-700 to-gray-800 px-4 text-center lg:h-screen flex flex-col justify-between">
            <div className="container mx-auto">
                <Navbar />
            </div>
            <div className="w-full max-w-xl lg:max-w-2xl mx-auto py-28 lg:py-0"> 
                <h2 className="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl mt-2 mb-6 leading-tight font-semibold font-heading">Earn Rewards On Your Cryptoassets</h2>
                <p className="mb-8 text-gray-200 xl:text-lg leading-relaxed">Professional, dedicated, local. Dunder Mifflin is on its best patch to change the way you think about paper. That’s us - people who sell limitless paper in the paperless world.</p>
                <div>
                    <a className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-400 hover:bg-indigo-500 font-semibold rounded shadow" href="#join">Join now</a>
                    <a className="text-indigo-400 hover:underline" href="#about">Learn more</a>
                </div>
            </div>
            <div className="hidden w-full max-w-2xl mx-auto lg:flex items-start justify-center p-20 lg:p-10 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-10 w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>;
  }
}

export default Header;