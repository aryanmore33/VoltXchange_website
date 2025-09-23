import React, { useState } from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,ArcElement,BarElement,Title,Tooltip,Legend,} from "chart.js";
import Navbar from './Navbar'
import Footer from "./Footer";
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,ArcElement,BarElement,Title,Tooltip,Legend);

export default function Insights() {
  
  const energyPriceData = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "Renewable Energy",
        data: [200,210,180,220,260,250,270,280,290,310,300,295],
        borderColor: "#000000",
        backgroundColor: "#000000",
        borderWidth: 2,
      },
      {
        label: "Grid Energy",
        data: [160,165,155,150,170,175,180,185,190,200,210,220],
        borderColor: "#22c55e",
        backgroundColor: "#22c55e",
        borderWidth: 2,
      },
    ],
  };
  const energyPriceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { usePointStyle: true, boxWidth: 10 } },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 300,
        ticks: { stepSize: 75, callback: (v) => `${v} $` },
      },
    },
  };

  
  const volatilityData = {
    labels: ["01/02","01/04","01/06","01/08","01/10","01/12"],
    datasets: [
      {
        label: "Price Volatility",
        data: [90,95,100,110,115,120],
        borderColor: "#000000",
        backgroundColor: "rgba(0,0,0,0.1)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };
  const volatilityOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: false,
        min: 80,
        max: 130,
        ticks: { stepSize: 10, callback: (v) => `${v} $` },
      },
    },
  };


  const sustainabilityData = {
    labels: ["Renewable Share","Non-Renewable Share"],
    datasets: [
      {
        data: [75,25],
        backgroundColor: ["#0f172a","#22c55e"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };
  const sustainabilityOptions = {
    plugins: {
      legend: {
        position: "bottom",
        labels: { usePointStyle: true, pointStyle: "rect", padding: 20 },
      },
      tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.raw}%` } },
    },
  };

  
  const carbonData = {
    labels: ["Q1","Q2","Q3","Q4"],
    datasets: [
      {
        label: "CO2 Saved (kg)",
        data: [120,140,125,180],
        backgroundColor: "#0f172a",
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };
  const carbonOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => `${ctx.raw} kg` } },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        ticks: { callback: (v) => `${v} kg`, stepSize: 45 },
        grid: { drawBorder: false },
        min: 0,
        max: 180,
      },
    },
  };

  
  const trades = [
    { date: "2024-03-15", type: "Buy",  energy: "Solar", quantity: 1500, price: 0.12, status: "Success", pnl: 180.0 },
    { date: "2024-03-14", type: "Sell", energy: "Wind",  quantity: 1000, price: 0.15, status: "Success", pnl: -50.0 },
    { date: "2024-03-13", type: "Buy",  energy: "Hydro", quantity: 2000, price: 0.10, status: "Success", pnl: 200.0 },
    { date: "2024-03-12", type: "Sell", energy: "Grid",  quantity: 500,  price: 0.20, status: "Failed",  pnl: -20.0 },
    { date: "2024-03-11", type: "Buy",  energy: "Solar", quantity: 800,  price: 0.13, status: "Pending", pnl: 104.0 },
    { date: "2024-03-10", type: "Sell", energy: "Wind",  quantity: 1200, price: 0.14, status: "Success", pnl: -30.0 },
  ];

  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const paginatedTrades = trades.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <>
    
    <div className="flex">
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-4xl font-bold mb-8 tracking-wide">INSIGHTS</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li className="cursor-pointer font-bold hover:text-black">Price History</li>
          <li className="cursor-pointer font-bold hover:text-black">Trade History</li>
          <li className="cursor-pointer font-bold hover:text-black">Sustainability Report</li>
        </ul>
      </aside>

      <div className="flex-1 bg-gray-50 p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-2xl font-bold mb-2">Energy Price Trends</h2>
            <div className="h-[250px]">
              <Line data={energyPriceData} options={energyPriceOptions} />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-2xl font-bold mb-2">Daily Price Volatility</h2>
            <div className="h-[250px]">
              <Line data={volatilityData} options={volatilityOptions} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-2xl font-bold mb-1">Sustainability Impact</h2>
            <p className="text-sm text-black-500 mb-4">Your energy mix breakdown.</p>
            <div className="h-[200px] flex justify-center">
              <Doughnut data={sustainabilityData} options={sustainabilityOptions} />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-2xl font-bold mb-1">Carbon Emission Reduction</h2>
            <p className="text-sm text-black-500 mb-4">Kilograms of CO2 saved by quarter.</p>
            <div className="h-[200px]">
              <Bar data={carbonData} options={carbonOptions} />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-1">Export Reports</h2>
            <p className="text-sm text-black-500 mb-4">Download your data in various formats.</p>
            <button className="flex items-center gap-2 bg-gray-300 text-black rounded-xl px-4 py-2 mb-3 hover:bg-gray-200">
              <span>📄</span> Export to CSV
            </button>
            <button className="flex items-center gap-2 bg-gray-300 text-black rounded-xl px-4 py-2 hover:bg-gray-200">
              <span>📄</span> Export to PDF
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Trade History</h2>
          <p className="text-sm text-black-500 mb-4">Overview of your latest energy transactions.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="text-gray-600 border-b">
                  <th className="py-2 px-3">Date</th>
                  <th className="py-2 px-3">Type</th>
                  <th className="py-2 px-3">Energy Type</th>
                  <th className="py-2 px-3">Quantity (kWh)</th>
                  <th className="py-2 px-3">Price ($/kWh)</th>
                  <th className="py-2 px-3">Status</th>
                  <th className="py-2 px-3">P&amp;L ($)</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTrades.map((trade, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="py-2 px-3">{trade.date}</td>
                    <td className="py-2 px-3">{trade.type}</td>
                    <td className="py-2 px-3">{trade.energy}</td>
                    <td className="py-2 px-3">{trade.quantity}</td>
                    <td className="py-2 px-3">{trade.price.toFixed(2)}</td>
                    <td className={`py-2 px-3 font-medium ${
                      trade.status === "Success"? "text-green-600": trade.status === "Failed"? "text-red-600": "text-yellow-600"}`}>
                      {trade.status}
                    </td>
                    <td className={`py-2 px-3 font-medium ${
                      trade.pnl >= 0 ? "text-green-600" : "text-red-600"
                    }`}>
                      {trade.pnl.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

            <div className="space-x-2 ">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                className="px-3 py-1 rounded border hover:bg-gray-300"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setPage((p) => Math.min(p + 1, Math.ceil(trades.length / rowsPerPage)))
                }
                className="px-3 py-1 rounded border hover:bg-gray-300"
              >
                Next
              </button>
    
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
