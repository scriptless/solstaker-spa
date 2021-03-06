import React, { Component } from 'react';
import ScrollSection from '../elements/ScrollSection';

class Features extends Component {
  render() {
    return <ScrollSection name="features" className="px-7 py-10 rounded-xl border border-1 border-gray-700">
        <div className="flex flex-wrap -mx-4 -mb-6">
            <div className="lg:w-1/3 px-4 mb-6 flex flex-col items-center text-center">
                <svg className="text-indigo-400 w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <h3 className="text-white text-xl my-3 font-semibold font-heading">High durability</h3>
                <p className="text-gray-200 leading-relaxed">Forget about paper jams with our increased stability product. Ideal for high-quality printing, colour printing and photocopying.</p>
            </div>
            <div className="lg:w-1/3 px-4 mb-6 flex flex-col items-center text-center">
                <svg className="text-indigo-400 w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                <h3 className="text-white text-xl my-3 font-semibold font-heading">Versatility</h3>
                <p className="text-gray-200 leading-relaxed">Multi-functional paper for various office needs. Snow-white sheets will shine bright like diamond for many years.</p>
            </div>
            <div className="lg:w-1/3 px-4 mb-6 flex flex-col items-center text-center">
                <svg className="text-indigo-400 w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <h3 className="text-white text-xl my-3 font-semibold font-heading">Value-based price</h3>
                <p className="text-gray-200 leading-relaxed">The best combination of quality and economy comes with Dunder Mifflin paper. The offer includes paper in wide range of density and sizes.</p>
            </div>
        </div>
    </ScrollSection>;
  }
}

export default Features;