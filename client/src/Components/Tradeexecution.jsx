import React from 'react'
import { useState } from "react";
const offers = [
  { id: 1, title: "Solar Energy", supplier: "SunPower Inc.", type: "Renewable", available: "5,000 kWh", price: "$0.15 / kWh", minPurchase: "100 kWh", },
  { id: 2, title: "Wind Energy", supplier: "AeroGrid Solutions", type: "Renewable", available: "7,500 kWh", price: "$0.14 / kWh", minPurchase: "100 kWh", },
  { id: 3, title: "Hydro Energy", supplier: "RiverFlow Energy", type: "Renewable", available: "3,000 kWh", price: "$0.16 / kWh", minPurchase: "50 kWh", },
  { id: 4, title: "Natural Gas Energy", supplier: "Global Energy Corp", available: "10,000 kWh", price: "$0.10 / kWh", minPurchase: "200 kWh", },
];

const side = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-row">
      <aside className="w-74 min-h-screen shadow-md p-6">
        <h2 className="text-xl font-bold text-4xl mb-6">TRADE EXECUTION</h2>
        <ul className="space-y-4">
          <li>
            <option> Busy Energy</option>
          </li>
          <li>
            <option >$ Sell Energy</option>
          </li>
        </ul>
      </aside>
      <div className='flex flex-col align-center '>

      <div className="p-6 text-bold align-center mx-auto">
        <div className="flex justify-center  h-10 gap-2 mb-6">
          <button className="px-6 py-2 rounded-md text-bold bg-gray-200 text-black">
            Buy Energy
          </button>
          <div className="flex justify-center h-10 gap-2 "></div>
          <button className=" bg-gray-200 rounded-md  text-bold text-black-700">
            Sell Energy
          </button>
        </div>
      </div>
      <div className="p-6 max-w-5xl ">
        <div className="border rounded-xl bg-white p-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center bg-black text-white font-medium justify-center rounded-full ">1</div>
              <p className=" mt-2 text-sm font-medium">Select offer</p>
            </div>
            <div className="flex-1 border-t border-black-300 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-black-400 text-black-500 font-medium">2</div>
              <p className="mt-2 text-sm font-medium">Confirm & Pay</p>
            </div>
            <div className="flex-1 border-t border-black-300 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-black-400 text-black-500 font-medium">3</div>
              <p className="mt-2  font-medium">Receipt</p>
            </div>
          </div>
          <h2 className="text-xl font-bold mt-8 mb-2">1. Select Energy Offer</h2>
          <p className="text-black-600 mb-6">
            Choose an energy offer from the marketplace to proceed with your purchase.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="border rounded-xl p-5 bg-white  "
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">{offer.title}</h3>
                  <span className="text-sm text-black-600 font-medium">
                    {offer.type}
                  </span>
                </div>
                <p className=" text-black-600 ">
                  Supplier: <span className="font-medium ">{offer.supplier}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Available: <span className="font-medium">{offer.available}</span>
                </p>
                <p className="text-lg font-bold mt-2">{offer.price}</p>
                <p className="text-sm text-black-600">
                  Min. Purchase: <span className="font-medium">{offer.minPurchase}</span>
                </p>
                <button className="mt-4 w-full py-2 rounded-md bg-black text-white font-medium ">
                  <div className="flex justify-center gap-2 ">
                    Select Offer
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default side
