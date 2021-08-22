import React, { Component } from 'react';

class Features extends Component {
  render() {
    return <section class="px-7 py-10 rounded-xl border border-1 border-gray-700 mb-10 bg-gradient-to-tr from-gray-800 to-indigo-900">
        <div class="flex flex-col items-center">
            <img class="h-20 w-20 mt-3 mb-5" src={process.env.PUBLIC_URL + "/logos/exchange-white.svg"} alt=""/>
            <h1 class="text-white text-2xl font-semibold leading-tight">Solana</h1>
            <p class="text-gray-200">APY ~8%</p>
            <span class="my-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                online
            </span>
            <a class="mt-5 inline-block py-4 px-8 leading-none text-white bg-green-500 hover:bg-green-600 font-semibold rounded shadow" href="#">Stake now</a>
        </div>
    </section>;
  }
}

export default Features;