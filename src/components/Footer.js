import React, { Component } from 'react';
import InfoContent from './InfoContent';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: ''
        }
    }

  render() {
    return (
        <footer id="juckt">
            <div className="py-12 overflow-hidden lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <a onClick={() => this.setState({active: 'imprint'})} href="#info" className="text-base text-gray-400 hover:text-gray-200">
                        Imprint
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <a onClick={() => this.setState({active: 'tos'})} href="#info" className="text-base text-gray-400 hover:text-gray-200">
                        Terms of Service
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <a onClick={() => this.setState({active: 'privacy'})} href="#info" className="text-base text-gray-400 hover:text-gray-200">
                        Privacy Policy
                        </a>
                    </div>

                </nav>
                <div className="mt-8 lg:mt-0 flex justify-center space-x-6">
                    <a href="twitter" className="text-gray-400 hover:text-gray-200">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>

                    <a href="github" className="text-gray-400 hover:text-gray-200">
                        <span className="sr-only">GitHub</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>

                    <a href="telegram" className="text-gray-400 hover:text-gray-200">
                        <span className="sr-only">Telegram</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 27 27" aria-hidden="true">
                            <path fillRule="evenodd" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" clipRule="evenodd"/>
                        </svg>
                    </a>
                </div>
                <p className="mt-8 lg:mt-0 text-center text-base text-gray-400">
                    &copy; 2021 SolStaker.com, Inc. All rights reserved.
                </p>
            </div>
            <InfoContent onClose={() => this.setState({active: ''})} active={this.state.active}/>
        </footer>
    );
  }
}

export default Footer;