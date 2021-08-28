import React, { Component, useState } from 'react';
import ScrollSection from '../elements/ScrollSection';

const solanaAddress = "SolStaker6Kis8tFHA7AowrSchwabaMcRJk3LbApHTYpgSNXzY5KE";

const TableMarkup = props => (
    <div className="">
        <div className="-my-2 overflow-x-auto md:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block md:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    {props.children}
                </table>
            </div>
            </div>
        </div>
    </div>
)
const JoinDetailsTable = () => (
    <TableMarkup>
        <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reward Rate
                </th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Commission Rate
                </th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payout Frequency
                </th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Unbonding Period
                </th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            <tr>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                    ~8%
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                    5% - 10%
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                    1 Epoch (~3 Days)
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                    End of Epoch
                </td>
            </tr>
        </tbody>
    </TableMarkup>
)

const JoinDetailsAddressTable = () => (
    <TableMarkup>
        <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Displayname
                </th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Delegation Address
                </th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            <tr>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                    SolStaker
                </td>
                <td className="flex items-center space-x-2 px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span>{solanaAddress}</span>
                    <button onClick={()=> {navigator.clipboard.writeText(solanaAddress)}} className="hover:text-gray-900 focus:text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                    </button>
                    <a href="https://solanabeachiwas" target="_blank" rel="noreferrer" className="hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </td>
            </tr>
        </tbody>
    </TableMarkup>
)

const JoinDetails = props => {
    return (<div>
            <div className="flex justify-center">
                <img className="h-14 w-14 mb-8" src={process.env.PUBLIC_URL + "/logos/exchange-white.svg"} alt=""/>
            </div>
            <div className="flex flex-col md:items-center space-y-5">
                <JoinDetailsTable/>
                <JoinDetailsAddressTable/>
            </div>
            <span className="flex flex-col items-center mt-8 text-gray-400 hover:text-gray-200 cursor-pointer" onClick={() => props.setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
    </div>)
};

const JoinMarkup = () => {
    const [isOpen, setOpen] = useState(false);

    const clickButton = () => {
        setOpen(true); 
    }

    return (<ScrollSection name="join" className="px-7 py-16 rounded-xl border border-1 border-gray-700 bg-gradient-to-tr from-gray-800 to-indigo-900">
                {isOpen ? 
                (<JoinDetails className="transition-opacity duration-1000 ease-in-out" setOpen={setOpen}/>) :
                (<div className="flex flex-col items-center">
                    <img className="h-20 w-20 mb-5" src={process.env.PUBLIC_URL + "/logos/exchange-white.svg"} alt=""/>
                    <h1 className="text-white text-2xl font-semibold leading-tight">Solana</h1>
                    <p className="text-gray-200">APY ~8%</p>
                    <span className="my-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        online
                    </span>
                    <button onClick={() => clickButton()} className="mt-5 inline-block py-4 px-8 leading-none text-white bg-green-500 hover:bg-green-600 font-semibold rounded shadow">Stake now</button>
                </div>)} 
            </ScrollSection>)
}

class Join extends Component {
  render() {
    return <JoinMarkup/>
  }
}

export default Join;