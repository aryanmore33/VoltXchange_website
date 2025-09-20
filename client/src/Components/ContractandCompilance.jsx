import React from 'react'
import { FileSpreadsheet, ShieldCheck, ChevronsLeftRight  ,CircleCheckBig , Clock , Building , FileUser} from 'lucide-react'

const ContractandCompilance = () => {

    const contracts = [{
        id: "ETC-2023-001",
        counterparty: "SolarGen Inc.",
        type: "Purchase Agreement",
        status: "active",
        expiry: "2024-12-31"
    }, {
        id: "ETC-2023-002",
        counterparty: "SolarGen Inc.",
        type: "Purchase Agreement",
        status: "expired",
        expiry: "2024-12-31"
    }, {
        id: "ETC-2023-003",
        counterparty: "SolarGen Inc.",
        type: "Purchase Agreement",
        status: "pending",
        expiry: "2024-12-31"
    }, {
        id: "ETC-2023-004",
        counterparty: "SolarGen Inc.",
        type: "Purchase Agreement",
        status: "draft",
        expiry: "2024-12-31"
    }]

    const StatusBadge = ({ status }) => {
        let color = "bg-gray-200 text-gray-800"

        if (status === "active") color = "bg-green-100 text-green-700";
        if (status === "expired") color = "bg-red-100 text-red-700";
        if (status === "pending review") color = "bg-yellow-100 text-yellow-700";
        if (status === "draft") color = "bg-gray-300 text-gray-700"

        return (
            <span className={`px-2 py-1 rounded-full text-sm font-medium ${color}`}>{status}</span>
        )
    }

    const pendingSignatures = [
        {
            title: "Q3 Power Purchase Agreement",
            description: "Review and sign the quarterly power purchase agreement with ElectraCorp"
        },
        {
            title: "Q3 Power Purchase Agreement",
            description: "Review and sign the quarterly power purchase agreement with ElectraCorp"
        },
        {
            title: "Q3 Power Purchase Agreement",
            description: "Review and sign the quarterly power purchase agreement with ElectraCorp"
        },
        {
            title: "Q3 Power Purchase Agreement",
            description: "Review and sign the quarterly power purchase agreement with ElectraCorp"
        },
        {
            title: "Q3 Power Purchase Agreement",
            description: "Review and sign the quarterly power purchase agreement with ElectraCorp"
        },
    ]

    return (
        <div className='flex'>
            <div className='flex min-h-screen bg-gray-50'>
                <aside className='w-64 p-6 shadow-md border-2 border-gray-200'>
                    <h3 className='text-lg font-semibold text-gray-500'>Aggrements</h3>
                    <ul className="mt-4 space-y-4">
                        <li className="flex gap-2" ><FileSpreadsheet />Active Contracts</li>
                        <li className="flex gap-2"><ShieldCheck />Compliance Docs</li>
                        <li className="flex gap-2"><ChevronsLeftRight />Smart Contracts</li>
                    </ul>
                </aside>

            </div>
            <div className='flex-1 bg-gray-50 border-r-2 border-gray-50 shadow-md p-6'>
                <h1 className='font-bold text-2xl mb-5 '>Contracts and Compilance Management</h1>
                <div>
                    {/* Active Contracts */}
                    <div className="border-gray-200 border-2 mt-2 ml-2  p-6 rounded col-span-3">{/*change*/}
                        <h2 className="text-xl font-semibold">Active Contracts</h2>
                        <p className="text-gray-500 text-sm ">Overview of all current and recently completed energy contracts</p>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b">
                                    <th className="p-3">Contract ID</th>
                                    <th className="p-3">Counterparty</th>
                                    <th className="p-3">Type</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Expiry Date</th>
                                    <th className="p-3">Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {contracts.map((contract) =>
                                (
                                    <tr className="border-t-2 border-gray-300">
                                        <td className="p-3">{contract.id}</td>
                                        <td className="p-3">{contract.counterparty}</td>
                                        <td className="p-3">{contract.type}</td>
                                        <td className="p-3"><StatusBadge status={contract.status} /></td>
                                        <td className="p-3">{contract.expiry}</td>
                                        <td className="p-3"><button className="border-gray-300 border-2 p-1 rounded-xl">View Details</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="flex">
                    <div className="w-full border-gray-300 border-2 rounded p-3 m-2 col-span-2 overflow-y-auto max-h-[300px]">  {/*changed*/}
                        {/* Pending */}
                        <h2 className="text-xl font-semibold">Pending Signatures</h2>
                        <p className="text-gray-400">Contracts awaiting your digital signature</p>
                        <div>
                            {pendingSignatures.map((item, index) => (
                                <div key={index} className="flex items-center justify-between border-b-2  py-6 border-gray-300 last:border-b-0">
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <button className="bg-black text-white px-2 py-2 text-sm  border rounded-md whitespace-nowrap">Review & Sign</button>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="w-full border-gray-300 border-2 rounded p-3 m-2 col-span-1 "> {/*changed*/}
                        <h2 className="font-bold text-xl mb-2">Smart Contract Insights</h2>
                        <p className="text-gray-400">Monitor the status and details of your smart contracts</p>
                        <ul className="m-2 p-2">
                            <li className="flex gap-2 pb-4 font-semibold text-l"> <ChevronsLeftRight className="text-green-500" /> Contract ID: SC-7890-ABC</li>
                            <li className="flex gap-2 pb-3 text-gray-500" > <Building className="text-gray-500" />Network: EnergyNet Blockchain</li>
                            <li className="flex gap-2 pb-3 text-gray-500"><CircleCheckBig className="text-black"/>Status: Active & Verified</li>
                            <li className="flex gap-2 pb-3 text-gray-500"><Clock className="text-black text-xl" />Last Update: 2024-05-20, 14:30 UTC</li>
                        </ul>
                    </div>

                </div>
                {/* Legal Documentation Center */}
                <div className="flex-2 w-full border-gray-300 border-2 rounded p-3 m-2 shadow-md col-span-3">
                    <h1 className="font-bold text-2xl">Legal Documentation Center</h1>
                    <p className="text-gray-400 mt-2">Access all essential legal and compilance documents</p>
                    <ul className="mt-3">
                        <li className="font-semibold text-xl flex mb-2"><FileUser/>Terms of Service v2.1</li>
                        <li className="font-semibold text-xl flex mb-2"><FileUser/>Privacy Policy (GDPR Complaint)</li>
                        <li className="font-semibold text-xl flex mb-2"><FileUser/>Regulatory Guidances - EU Energy Market</li>
                        <li className="font-semibold text-xl flex mb-2"><FileUser/>AML and KYC Procedure Manual</li>
                        <li className="font-semibold text-xl flex mb-2"><FileUser/>Data Security Protocol v3.0</li>
                    </ul>
                </div>
            </div>
        </div>
    )
} 

export default ContractandCompilance

{/* <ChevronsLeftRight /> */}
{/* <Clock /> */}
{/* <CircleCheckBig /> */}


