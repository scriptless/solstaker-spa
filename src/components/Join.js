import React, { Component, useState } from 'react';
import ScrollSection from '../elements/ScrollSection';

const addressDetails = {
    displayName: "SolStaker",
    solanaAddress: "GKvqsuNcnwWqPzzuhLmGi4rzzh55FhJtefknjfh8734th43u2jfg423ug43g43zGizkhHaEJqiV",
    url: "https://google.de/omegalul/solana/addresse/123/69"
}

const details = {
    "Reward Rate": "8%",
    "Comission Rate": "5% - 10%",
    "Payout Frequency": "1 Epoch (~3 Days)",
    "Unbonding Period": "End of Epoch"
}

const TableMarkup = props => (
    <div className="-my-2 md:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block md:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                <table className="table-fixed w-full lg:w-auto divide-y divide-gray-200">
                    {props.children}
                </table>
            </div>
        </div>
    </div>
)

const JoinDetailsTable = () => (
    <TableMarkup>
        <tbody className="md:hidden bg-white divide-y divide-gray-200">
            {Object.keys(details).map((key, i) => (
            <div key={i}>
                <tr>
                    <td className="px-5 pb-1 pt-3 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {key}
                    </td>
                </tr>
                <tr>
                    <td className="px-5 pb-3 pt-1 whitespace-nowrap text-sm text-gray-500">
                        {details[key]}
                    </td>
                </tr>
            </div>
            ))}
        </tbody>
        <thead className="hidden md:table-row-group bg-gray-50">
            <tr>
                {Object.keys(details).map((key, i) => (
                <th key={i} scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {key}
                </th>
                ))}
            </tr>
        </thead>
        <tbody className="hidden md:table-row-group bg-white divide-y divide-gray-200">
            <tr>
                {Object.keys(details).map((key, i) => (
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                        {details[key]}
                    </td>
                ))}
            </tr>
        </tbody>
    </TableMarkup>
)

const JoinDetailsAddressTable = () => (
    <TableMarkup>
        <tbody className="md:hidden bg-white divide-y divide-gray-200">
            <div>
                <tr className="break-all">
                    <td className="px-5 pb-1 pt-3 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Displayname
                    </td>
                </tr>
                <tr className="break-all">
                    <td className="px-5 pb-3 pt-1 whitespace-nowrap text-sm text-gray-500">
                        {addressDetails.displayName}
                    </td>
                </tr>
            </div>
            <div>
                <tr className="break-all">
                    <td className="px-5 pb-1 pt-3 whitespace-normal text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center space-x-2">
                        <span>Delegation Address</span>
                        <button onClick={()=> {navigator.clipboard.writeText(addressDetails.solanaAddress)}} className="hover:text-gray-900 focus:text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                        </button>
                        <a href={addressDetails.url} target="_blank" rel="noreferrer" className="hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                    </td>
                </tr>
                <tr className="break-all">
                    <td className="px-5 pb-3 pt-1 text-sm text-gray-500 whitespace-normal">
                        {addressDetails.solanaAddress}
                    </td>
                </tr>
            </div>
        </tbody>
        <thead className="hidden md:table-header-group bg-gray-50">
            <tr className="break-all">
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Displayname
                </th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center space-x-2">
                    <span>Delegation Address</span>
                    <button onClick={()=> {navigator.clipboard.writeText(addressDetails.solanaAddress)}} className="hover:text-gray-900 focus:text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                    </button>
                    <a href={addressDetails.url} target="_blank" rel="noreferrer" className="hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </th>
            </tr>
        </thead>
        <tbody className="hidden md:table-row-group bg-white divide-y divide-gray-200">
            <tr className="break-all">
                <td className="px-5 py-4 whitespace-normal text-sm text-gray-500">
                    {addressDetails.displayName}
                </td>
                <td className="px-5 py-4 whitespace-normal text-sm text-gray-500">
                    <span>{addressDetails.solanaAddress}</span>
                </td>
            </tr>
        </tbody>
    </TableMarkup>
)

const JoinDetailsMarkup = props => {
    return (<div>
            <div className="flex justify-center">
                <img className="h-12 w-12 mb-8" src={process.env.PUBLIC_URL + "/logos/exchange-white.svg"} alt=""/>
            </div>
            <div className="space-y-5 flex flex-col items-center">
                <JoinDetailsTable/>
                <JoinDetailsAddressTable/>
            </div>
            <CloseButton setOpen={props.setOpen}/>
    </div>)
};

const CloseButton = props => (
    <span className="flex flex-col items-center mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => props.setOpen(false)} className="cursor-pointer h-7 w-7 text-gray-400 hover:text-gray-200 bg-indigo-900 hover:bg-indigo-700 rounded-full border-2 border-indigo-900 hover:border-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
        </svg>        
    </span>
)

const JoinMarkup = () => {
    const [isOpen, setOpen] = useState(false);

    const clickButton = () => {
        setOpen(true); 
    }

    return (<ScrollSection name="join" className="px-7 py-16 rounded-xl border border-1 border-gray-700 bg-gradient-to-tr from-gray-800 to-indigo-900">
                {isOpen ? 
                (<JoinDetailsMarkup setOpen={setOpen}/>) :
                (<div className="flex flex-col items-center">
                    <img className="h-16 w-16 mb-5" src={process.env.PUBLIC_URL + "/logos/exchange-white.svg"} alt=""/>
                    <h1 className="text-white text-2xl font-semibold leading-tight">Solana</h1>
                    <p className="text-gray-200">APY ~8%</p>
                    <span className="my-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        online
                    </span>
                    <button onClick={() => clickButton()} className="mt-5 inline-block py-4 px-8 leading-none text-white bg-green-500 hover:bg-green-600 ring-2 ring-green-600 ring-opacity-50 font-semibold rounded shadow">Stake now</button>
                </div>)} 
            </ScrollSection>)
}

class Join extends Component {
  render() {
    return <JoinMarkup/>
  }
}

export default Join;