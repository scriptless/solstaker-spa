import React, { Component } from 'react';
import ScrollSection from '../elements/ScrollSection';

class Contact extends Component {
  render() {
    return (
        <ScrollSection name="contact">
            <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-3">

                {/* Contact information */}
                <div className="relative overflow-hidden py-9 px-7 rounded-t-xl lg:rounded-t-none lg:rounded-l-xl border border-1 border-gray-700">
                    <h1 className="text-white text-2xl leading-5 font-semibold font-heading mb-5">Contact information</h1>
                    <p className="mt-6 text-base text-gray-200 max-w-3xl">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
                    <dl className="mt-8 space-y-6">
                    <dt><span className="sr-only">Phone number</span></dt>
                    <dd className="flex text-base text-gray-200">
                        {/* Heroicon name: outline/phone */}
                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="ml-3">+1 (555) 123-4567</span>
                    </dd>
                    <dt><span className="sr-only">Email</span></dt>
                    <dd className="flex text-base text-gray-200">
                        {/* Heroicon name: outline/mail */}
                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="ml-3">support@workcation.com</span>
                    </dd>
                    </dl>
                    <ul className="mt-8 flex space-x-12">
                    <li>
                        <a className="text-indigo-400 hover:text-indigo-100" href="twitter">
                        <span className="sr-only">Twitter</span>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
                            <path d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209" fill="currentColor" />
                        </svg>
                        </a>
                    </li>
                    <li>
                        <a className="text-indigo-400 hover:text-indigo-100" href="github">
                        <span className="sr-only">GitHub</span>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
                            <path d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12" fill="currentColor" />
                        </svg>
                        </a>
                    </li>
                    <li>
                        <a className="text-indigo-400 hover:text-indigo-100" href="telegram">
                        <span className="sr-only">Telegram</span>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
                            <path d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" fill="currentColor"/>
                        </svg>
                        </a>
                    </li>
                    </ul>
                </div>


                {/* Contact form */}
                <div className="bg-gradient-to-b from-indigo-900 to-gray-800 py-9 px-9 lg:col-span-2 rounded-b-xl lg:rounded-l-none lg:rounded-r-xl border border-1 border-t-0 lg:border-t lg:border-l-0 border-gray-700">
                    <h1 className="text-white text-2xl leading-5 font-semibold font-heading mb-5">Send us a message</h1>
                    <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
                        <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-200">Subject</label>
                        <div className="mt-1">
                        <input type="text" name="subject" id="subject" className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <div className="flex justify-between">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
                        <span id="message-max" className="text-sm text-gray-300">Max. 500 characters</span>
                        </div>
                        <div className="mt-1">
                        <textarea id="message" name="message" rows={3} className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" aria-describedby="message-max" defaultValue={""} />
                        </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                        <button type="submit" className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto">
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </ScrollSection>
      );
    }
}

export default Contact;