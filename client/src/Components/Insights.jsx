import React, { useState } from "react";
import image1 from "/image1.png"
import image2 from "/image2.png"
import image3 from "/image3.png"
import image4 from "/image4.png"

const Insights = () => {
  const trades = [
    {date: "2024-03-15",type: "Buy",energy: "Solar",quantity: 1500,price: 0.12,status: "Success",pnl: 180.0,},
    {date: "2024-03-14",type: "Sell",energy: "Wind",quantity: 1000,price: 0.15,status: "Success",pnl: -50.0,},
    {date: "2024-03-13",type: "Buy",energy: "Hydro",quantity: 2000,price: 0.1,status: "Success",pnl: 200.0,},
    {date: "2024-03-12",type: "Sell",energy: "Grid",quantity: 500,price: 0.2,status: "Failed",pnl: -20.0,},
    {date: "2024-03-11",type: "Buy",energy: "Solar",quantity: 800,price: 0.13,status: "Pending",pnl: 104.0,},
    {date: "2024-03-10",type: "Sell",energy: "Wind",quantity: 1200,price: 0.14,status: "Success",pnl: -30.0,},
  ];
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const paginatedTrades = trades.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="flex flex-row">
      <aside className="w-74 min-h-screen shadow-md p-6">
        <h2 className="text-4xl font-bold mb-6">Insights</h2>
        <ul className="space-y-4 text-lg">
          <li>Price History</li>
          <li>Trade History</li>
          <li>Sustainability Report</li>
        </ul>
      </aside>
      <div className="flex-1 p-6 space-y-6 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-bold mb-2">Energy Price Trends</h2>
            <img src={image1} alt="" className="rounded-lg w-full" />
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-bold mb-2">Daily Price Volatility</h2>
            <img src={image2} alt="" className="rounded-lg w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-bold mb-2">Sustainability Impact</h2>
            <p className="text-sm text-black-600 mb-4">Your energy mix breakdown.</p>
            <img src={image3} alt="" className="rounded-lg w-full" />
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-bold mb-2">Carbon Emission Reduction</h2>
            <p className="text-sm text-black-600 mb-4">Kilograms of CO2 saved by quarter.</p>
            <img src={image4} alt="" className="rounded-lg w-full" />
          </div>
          <div className="bg-white rounded-2xl shadow p-4 flex flex-col justify-center">
            <h2 className="text-lg font-bold mb-2">Export Reports</h2>
            <p className="text-sm text-black-600 mb-4">Download your data in various formats.</p>
            <button className="flex items-center gap-2 bg-black text-white rounded-xl px-4 py-2 mb-3 hover:bg-gray-800">
              <span>📄</span> Export to CSV
            </button>
            <button className="flex items-center gap-2 bg-black text-white rounded-xl px-4 py-2 hover:bg-gray-800">
              <span>📄</span> Export to PDF
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-bold mb-4">Recent Trade History</h2>
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
                {paginatedTrades.map((trade, index) => (
                  <tr className="border-b last:border-0 hover:bg-gray-50">
                    <td className="py-2 px-3">{trade.date}</td>
                    <td className="py-2 px-3">{trade.type}</td>
                    <td className="py-2 px-3">{trade.energy}</td>
                    <td className="py-2 px-3">{trade.quantity}</td>
                    <td className="py-2 px-3">{trade.price.toFixed(2)}</td>
                    <td
                      className={`py-2 px-3 font-medium ${
                        trade.status === "Success"? "text-green-600": trade.status === "Failed"? "text-red-600": "text-yellow-600"
                      }`}
                    >
                      {trade.status}
                    </td>
                    <td
                      className={`py-2 px-3 font-medium ${
                        trade.pnl >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {trade.pnl.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <p>
              Showing {(page - 1) * rowsPerPage + 1}-
              {Math.min(page * rowsPerPage, trades.length)} of {trades.length} trades
            </p>
            <div className="space-x-2">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                className="px-3 py-1 rounded border hover:bg-gray-100"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setPage((p) =>
                    Math.min(p + 1, Math.ceil(trades.length / rowsPerPage))
                  )
                }
                className="px-3 py-1 rounded border hover:bg-gray-100"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
