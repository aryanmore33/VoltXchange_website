import React from 'react'
import { useState } from "react";
import { FaBolt, FaLeaf, FaClock, FaDollarSign } from "react-icons/fa";
import Navbar from './Navbar'
import Footer from './Footer';

const contractsData = [
  { id: 1, name: "GeoTherm", kWh: 75000, source: "Renewable", duration: "1 Year", price: 25000 },
  { id: 2, name: "BioFuel D", kWh: 80000, source: "Renewable", duration: "3 Months", price: 27000 },
  { id: 3, name: "WindHarv", kWh: 90000, source: "Renewable", duration: "3 Months", price: 28000 },
  { id: 4, name: "Natural Gas", kWh: 150000, source: "Non-Renewable", duration: "6 Months", price: 30000 },
  { id: 5, name: "GreenWave", kWh: 125000, source: "Renewable", duration: "6 Months", price: 35000 },
  { id: 6, name: "CoalFire E", kWh: 200000, source: "Non-Renewable", duration: "3 Months", price: 40000 },
  { id: 7, name: "HydroFlow", kWh: 180000, source: "Renewable", duration: "1 Year", price: 48000 },
  { id: 8, name: "Nuclear Power", kWh: 300000, source: "Non-Renewable", duration: "2 Years", price: 55000 },
];

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const contractsPerPage = 8;
  const filteredContracts = contractsData.filter((contract) =>
    contract.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredContracts.length / contractsPerPage);
  const startIndex = (currentPage - 1) * contractsPerPage;
  const currentContracts = filteredContracts.slice(startIndex, startIndex + contractsPerPage);

  return (
    <>
    
    <div className="flex flex-row">
      <aside className="w-62 min-h-screen shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">MARKETPLACE</h2>
        <ul className="space-y-4">
          <li>
            <button>All Contracts</button>
          </li>
          <li>
            <button>My Offers</button>
          </li>
        </ul>
      </aside>
      <div className="w-70 space-y-4 bg-white h-160 p-4 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Energy Marketplace</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="font-medium">Renewable Only</label>
            <button>
              <div />
            </button>
          </div>
          <div>
            <label className="block font-medium mb-2">Price Range</label>
            <div className="flex space-x-2">
              <input
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: e.target.value })
                }
              
                className="w-1/2 border rounded-lg p-2"
              />
              <input
                value={priceRange.max}
                className="w-1/2 border rounded-lg p-2"
              />
            </div>
          </div>
          <div>
            <label className="block font-medium mb-2">Duration</label>
            <select
              className="w-full border rounded-lg p-2"
            >
              <option value="">Select Duration</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-2">Seller Reputation</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                />
                <span>All Sellers</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                />
                <span>Verified</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                />
                <span>High Rated (4.5+)</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                />
                <span>New Seller</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block font-medium mb-2">Sorting Options</label>
            <span>Sort by </span>
            <select
              className="w-full border rounded-lg p-2"
            >
              <option value="lowest">Lowest Price</option>
            </select>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white-50 min-h-screen">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm mb-6 max-w-xl mx-auto">
         
          <input
            placeholder="Search contracts by name or supplier..."
            value={searchQuery}
            className="ml-2 w-full bg-transparent  text-gray-700 placeholder-gray-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 2xl:grid-col-5 3xl:grid-col-6 gap-6">
          {currentContracts.map((contract) => (
            <div key={contract.id} className="border rounded-2xl p-4 shadow-sm bg-white">
              <h3 className="text-lg font-semibold mb-2">{contract.name}</h3>
              <p className="text-black-600">
                <FaBolt className="mr-2 text-yellow-500" />

                 kWh: {contract.kWh.toLocaleString()}
             </p>
              <p className="text-black-600 flex items-center">
                <FaLeaf className="mr-2 text-blue-500" />

                Source:{" "}
                <span
                  className={`ml-2 px-2 py-1 rounded text-xs font-medium ${contract.source === "Renewable" ? "bg-black-100 text-black-700" : "bg-black-100 text-black-700"
                    }`}
                >
                  {contract.source}
                </span>
              </p>
              <p className="text-gray-600">Duration: {contract.duration}</p>
              <p className="text-gray-800 font-bold mt-2">Price: ${contract.price.toLocaleString()}</p>
              <button className="mt-4 w-full bg-gray-300 text-black rounded-lg py-2 hover:bg-black-700">
                View Details
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
         {Array.from({ length: totalPages }, (_, index) => (
            <button >
            </button>
          ))}

          <button
            className="px-3 py-1 border rounded disabled:opacity-50">
            Next
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>


  )
}
export default Sidebar
