import React, { Component } from 'react';
import ScrollSection from '../elements/ScrollSection';

class About extends Component {
  render() {
    return <ScrollSection name="about">
        <div className="flex flex-col lg:flex-row w-full space-y-5 lg:space-x-10 lg:space-y-0">
            <div className="border border-gray-700 rounded-xl px-7 py-9 w-full">
                <h1 className="text-white text-2xl leading-5 font-semibold font-heading mb-5">Security</h1>
                <span className="leading-relaxed text-gray-200">
                    Dolore magna aliqua. Ut enim deserunt mollit anim id est laborum.
                </span>
            </div>
            <div className="border border-gray-700 rounded-xl px-7 py-9 w-full">
                <h1 className="text-white text-2xl leading-5 font-semibold font-heading mb-5">Reliability</h1>
                <span className="leading-relaxed text-gray-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </div>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-800 rounded-xl px-7 py-9 mt-5 sm:mt-10 text-left">
            <h1 className="text-white text-2xl leading-5 font-semibold font-heading mb-5">About us</h1>
            <span className="leading-relaxed text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
        </div>
        </ScrollSection>;
  }
}

export default About;