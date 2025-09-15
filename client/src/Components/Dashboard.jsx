import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
     
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">EnergyTradePro</h1>
        <nav className="space-x-6 text-gray-600">
          <a href="#" className="hover:text-black">Dashboard</a>
          <a href="#" className="hover:text-black">Marketplace</a>
          <a href="#" className="hover:text-black">Trade</a>
          <a href="#" className="hover:text-black">Analytics</a>
          <a href="#" className="hover:text-black">Wallet</a>
          <a href="#" className="hover:text-black">Contracts</a>
        </nav>
        <div className="flex items-center space-x-4">
          <span className="w-8 h-8 rounded-full bg-gray-300"></span>
        </div>
      </header>

     
      <div className="flex flex-1">
      
        <aside className="w-64 bg-white p-4 border-r">
          <h2 className="font-bold mb-4 text-gray-700">TRADING HUB</h2>
          <ul className="space-y-2">
            <li><a href="#" className="block p-2 rounded hover:bg-gray-100">My Portfolio</a></li>
            <li><a href="#" className="block p-2 rounded hover:bg-gray-100">Market Overview</a></li>
            <li><a href="#" className="block p-2 rounded hover:bg-gray-100">Quick Actions</a></li>
          </ul>
        </aside>

        
        <main className="flex-1 p-6 space-y-6">
        
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Portfolio Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500">Total Energy Bought</p>
                <p className="text-xl font-bold">2,500 MWh</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Energy Sold</p>
                <p className="text-xl font-bold">1,800 MWh</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Fiat Balance</p>
                <p className="text-xl font-bold">$123,456.78</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Available Energy Credits</p>
                <p className="text-xl font-bold">700 MWh</p>
              </div>
            </div>
            <div className="mt-4 text-green-600 font-semibold">
              Overall Profit/Loss: +$12,345.67 (+11.1%)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h3 className="font-semibold mb-4">Market Price Trends (MWh/€)</h3>
              <div className="h-48 flex items-center justify-center text-gray-400">
                  [Chart Placeholder]<img src="img2.jpg" style={{width:"400",height:"50%"}}></img>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-black text-white py-2 rounded-lg">Buy Energy</button>
                <button className="w-full bg-gray-800 text-white py-2 rounded-lg">Sell Energy</button>
                <button className="w-full bg-gray-200 text-black py-2 rounded-lg">View Contracts</button>
              </div>
            </div>
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Energy Balance (MWh)</h3>
            <div className="h-48 flex items-center justify-center text-gray-400">
              [Energy Balance Chart Placeholder]<img src="img4.jpg"></img>
            </div>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-2">
              <li className="border-b py-2">Bought 50 MWh Solar Energy - <span className="text-sm text-gray-500">5 min ago</span></li>
              <li className="border-b py-2">Withdrawal of $500 initiated - <span className="text-sm text-gray-500">15 min ago</span></li>
              <li className="border-b py-2">Grid Energy price increased by 5% - <span className="text-sm text-gray-500">30 min ago</span></li>
              <li className="border-b py-2">Sold 30 MWh Wind Energy - <span className="text-sm text-gray-500">1 hour ago</span></li>
              <li className="py-2">Deposit of $1000 completed - <span className="text-sm text-gray-500">2 hours ago</span></li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
