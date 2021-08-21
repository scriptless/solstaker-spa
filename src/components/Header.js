import React, { Component } from 'react';

class Header extends Component {
  render() {
    return <section class="px-4 -mt-14 text-center h-screen flex flex-col justify-between">
            <div class="h-1"></div>
            <div class="w-full max-w-2xl mx-auto"> 
                <h2 class="text-white text-5xl mt-2 mb-6 leading-tight font-semibold font-heading">Earn Rewards On Your Cryptoassets</h2>
                <p class="mb-8 text-gray-200 leading-relaxed">Professional, dedicated, local. Dunder Mifflin is on its best patch to change the way you think about paper. That’s us - people who sell limitless paper in the paperless world.</p>
                <div>
                    <a class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-400 hover:bg-indigo-500 font-semibold rounded shadow" href="#">Join now</a>
                    <a class="text-indigo-400 hover:underline" href="#">Learn more</a>
                </div>
            </div>
            <div class="w-full max-w-2xl mx-auto flex items-start justify-center pb-10 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="animate-bounce h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>;
  }
}

export default Header;