import React, { Component } from 'react';

const MobileMenu = props => (
    <div className={props.open ? "lg:hidden": "hidden"} id="mobile-menu">
        <div className="space-y-3">
            <a href="#about" className="text-gray-200 bg-gray-700 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#features" className="text-gray-200 bg-gray-700 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#faq" className="text-gray-200 bg-gray-700 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
            <a href="#contact" className="text-gray-200 bg-gray-700 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
    </div>
);

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileMenuOpen: false
        }
    }

    render() {
        return <div>
            <nav className="flex flex-wrap items-center justify-between py-5 lg:p-4">
                <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
                    <a className="text-xl sm:text-2xl text-indigo-300 font-semibold font-heading" href="/">SolStaker.com</a>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => this.setState({mobileMenuOpen: !this.state.mobileMenuOpen})} className="navbar-burger flex items-center text-blue-200 rounded">
                        {/*<svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />

                        </svg>*/}
                        <svg class="block h-7 w-7 sm:h-8 sm:w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            {this.state.mobileMenuOpen ? (
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
                <div className="navbar-menu hidden lg:px-5 lg:order-1 lg:block w-full lg:w-2/5 lg:text-left">
                    <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-200 hover:text-indigo-400" href="#about">About</a>
                    <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-200 hover:text-indigo-400" href="#features">Features</a>
                </div>
                <div className="navbar-menu hidden lg:px-5 lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
                    <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-200 hover:text-indigo-400" href="#faq">FAQ</a>
                    <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-200 hover:text-indigo-400" href="#contact">Contact</a>
                </div>
            </nav>
            <div className={this.state.mobileMenuOpen ? "hidden" : "block border-t border-gray-600"}></div>
            <MobileMenu open={this.state.mobileMenuOpen}/>
        </div>;
    }
}

export default Navbar;