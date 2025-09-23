import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
const paymentMethods = [
    {id: 1,type: "Bank Account",details: "Bank of America ••••8765",default: true,},
    {id: 2,type: "Credit Card",details: "Visa ••••1234 (Expires 12/26)",},
    {id: 3,type: "Crypto Wallet",details: "Ethereum Wallet ••••abcd",},
  ];

  const transactions = [
    {id: "T1001",type: "Deposit",description: "Bank Transfer from Checking",amount: "+1,000.00 USD",date: "2024-07-20",status: "Completed",badge: "Deposit",badgeColor: "bg-green-100 text-green-700",},
    {id: "T1002",type: "Trade Settlement",description: "Sale of 500 EPU",amount: "+500.00 USD",date: "2024-07-19",status: "Completed",badge: "Trade Settlement",badgeColor: "bg-blue-100 text-blue-700",},
    {id: "T1003",type: "Withdraw",description: "Withdrawal to Savings",amount: "-200.00 USD",date: "2024-07-18",status: "Pending",badge: "Withdraw",badgeColor: "bg-red-100 text-red-700",},
    {id: "T1004",type: "Deposit",description: "Crypto Deposit via BTC",amount: "+0.05 BTC",date: "2024-07-17",status: "Completed",badge: "Deposit",badgeColor: "bg-green-100 text-green-700",},
    {id: "T1005",type: "Fee",description: "Monthly Account Maintenance",amount: "-5.00 USD",date: "2024-07-15",status: "Completed",badge: "Fee",badgeColor: "bg-gray-100 text-gray-700",},
    {id: "T1006",type: "Trade Settlement",description: "Purchase of 100 EPU",amount: "-100.00 USD",date: "2024-07-14",status: "Completed",badge: "Trade Settlement",badgeColor: "bg-blue-100 text-blue-700",},
  ];

const Finance = () => {
  return (
    <>
    
    <div className="flex flex-row">
      <aside className="w-74 min-h-screen shadow-md p-6">
        <h2 className="font-bold text-4xl mb-6">FINANCE</h2>
        <ul className="space-y-4">
          <li>
            <option>Balance Overview</option>
          </li>
          <li>
            <option>Deposit/Withdraw</option>
          </li>
          <li>
            <option>Transaction History</option>
          </li>
        </ul>
      </aside>
      <div className='flex flex-col align-center '>
        <div className="min -h-screen bg-gray-200  flex items-center justify-center p-6">
       <div className="grid grid-cols-1 md:grid-cols-3 position-top gap-6 w-full max-w-5xl">
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700">Account Balances</h2>
          <p className="text-sm text-black-500 mb-6"> Your current financial overview and energy credits.</p> 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border rounded-xl p-6 flex flex-col">
              <span className="text-sm text-black-500">Fiat Currency Balance</span>
              <h3 className="text-3xl font-bold mt-2">15,820.75 <span className="text-lg">$</span></h3>
              <span className="text-xs text-green-600 mt-2">+1.2% since last month</span>
            </div>
            <div className="border rounded-xl p-6 flex flex-col">
              <span className="text-sm text-black-500">Energy Token Balance</span>
              <h3 className="text-3xl font-bold mt-2">7,450 $  <span className="text-lg">EPU</span></h3>
              <span className="text-xs text-red-600 mt-2">-0.5% since last month</span>
            </div>
          </div> 
        </div>
        </div>
         <div className="bg-white h-82 min-w-90 rounded-2xl border shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700">Quick Actions</h2>
          <p className="text-sm text-gray-500 mb-6">Manage your funds swiftly.</p>
          <div className="flex flex-col gap-4">
            <button className="bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-gray-800">
              Deposit Funds
            </button>
            <button className="border border-gray-300 py-2 px-4 rounded-lg shadow hover:bg-gray-50">
              Withdraw Funds
            </button>
          </div>
        </div>
       </div>
         <div className="p-6 bg-gray-200 max-w-8xl min-h-screen mx-auto space-y-6">
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Payment Methods</h2>
          <button className="px-3 py-1 bg-gray-100 text-black-600 rounded-lg text-sm">+ Add New Method
          </button>
        </div>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <div
              className="flex justify-between items-center border rounded-lg p-4"
            >
              <div>
                <p className="font-medium">{method.type}</p>
                <p className="text-sm text-gray-500">{method.details}</p>
              </div>
              <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">
                    Default
                  </span>
                <button className="text-sm text-gray-700 hover:text-red-600">
                  Remove
                </button>
                <button className="text-sm text-blue-600 hover:underline">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-bold mb-4">Transaction History</h2>
        <p className="text-sm text-black-600 mb-4">
          Detailed record of all your financial activities.
        </p>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-bold text-black-600 border-b">
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3">Type</th>
                <th className="py-2 px-3">Description</th>
                <th className="py-2 px-3">Amount</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b last:border-0">
                  <td className="py-2 px-3">{tx.id}</td>
                  <td className="py-2 px-3">
                    <span
                      className={`px-2 py-1 rounded-md text-xs font-medium ${tx.badgeColor}`}
                    >
                      {tx.badge}
                    </span>
                  </td>
                  <td className="py-2 px-3">{tx.description}</td>
                  <td
                    className={`py-2 px-3 font-medium ${
                      tx.amount.startsWith("-")? "text-red-500": "text-green-600"
                    }`}
                  >
                    {tx.amount}
                  </td>
                  <td className="py-2 px-3">{tx.date}</td>
                  <td className="py-2 px-3">{tx.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
       </div>
       
    </div>
    <Footer/>
      
  </>
  )
}

export default Finance
