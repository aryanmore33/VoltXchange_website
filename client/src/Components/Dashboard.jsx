import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  SubTitle,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Navbar from './Navbar'
import Footer from "./Footer";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  SubTitle
);

export default function Dashboard() {
  
  const marketLabels = [
    "00:00","02:00","04:00","06:00","08:00","10:00",
    "12:00","14:00","16:00","18:00","20:00","22:00"
  ];
  const marketData = {
    labels: marketLabels,
    datasets: [
      {
        label: "Solar Energy",
        data: [1.2, 1.1, 1.0, 1.3, 1.6, 2.0, 2.5, 2.4, 2.0, 1.6, 1.3, 1.1],
        borderColor: "#000000",
        backgroundColor: "#000000",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Grid Energy",
        data: [0.8, 0.7, 0.65, 0.9, 1.2, 1.5, 1.8, 1.9, 1.6, 1.2, 1.0, 0.8],
        borderColor: "#00C853",
        backgroundColor: "#00C853",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Wind Energy",
        data: [1.4, 1.3, 1.3, 1.5, 1.7, 1.9, 2.2, 2.1, 1.9, 1.6, 1.5, 1.4],
        borderColor: "#4CAF50",
        backgroundColor: "#4CAF50",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };
  const marketOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { usePointStyle: true, boxWidth: 10 } },
      title: {
        display: true,
        text: "Market Price Trends (MWh/€)",
        font: { size: 18, weight: "bold" },
      },
      subtitle: {
        display: true,
        text: "Last 24 hours average prices",
        font: { size: 14 },
        color: "#666",
      },
    },
    scales: {
      y: { min: 0, max: 2.6, ticks: { stepSize: 0.65 } },
    },
  };

  
  const balanceLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const balanceData = {
    labels: balanceLabels,
    datasets: [
      {
        label: "Consumption",
        data: [350, 400, 420, 450, 500, 580],
        borderColor: "#1E3A8A",
        backgroundColor: "rgba(30, 58, 138, 0.4)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Production",
        data: [900, 950, 980, 1020, 1100, 1200],
        borderColor: "#000000",
        backgroundColor: "rgba(0,0,0,0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const balanceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { usePointStyle: true } },
      title: {
        display: true,
        text: "Energy Balance (MWh)",
        font: { size: 18, weight: "bold" },
      },
      subtitle: {
        display: true,
        text: "Consumption vs. Production",
        font: { size: 14 },
        color: "#666",
      },
    },
    scales: {
      y: { beginAtZero: true, max: 1200, ticks: { stepSize: 300 } },
    },
  };

  return (
    <>
    
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
              <h3 className="font-semibold mb-4">Market Price Trends</h3>
              <div className="h-64">
                <Line data={marketData} options={marketOptions} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-black text-white py-2 rounded-lg">Buy Energy</button>
                <button className="w-full bg-gray-200 text-black py-2 rounded-lg">Sell Energy</button>
                <button className="w-full bg-gray-200 text-black py-2 rounded-lg">View Contracts</button>
              </div>
            </div>
          </div>

  
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="h-64">
              <Line data={balanceData} options={balanceOptions} />
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
    <Footer/>
    </>
  );
}
