import React from "react";
import Navbar from './Navbar'
import Footer from "./Footer";
import { Zap, DollarSign, Leaf, Activity, Shield, Shuffle } from "lucide-react"; 

export default function App() {
  return (<>
    <div className="font-sans display-flex justify-content-center align-items w-min-screen text-gray-800"/>
      <section
        className="relative h-[500px] flex flex-col justify-center items-center w-min-screen text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.axionpower.com/wp-content/uploads/2019/05/Solar-energy-panels-with-wind-turbines-on-orange-sky-web.jpg')",
        }}
      />
       

        {/* <div className="relative z-10 text-white px-4 max-w-3xl"> */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Powering Tomorrow: Your Hub for Sustainable Energy Trading
          </h1>
          <p className="mb-6">
            EnergyTrade Pro offers real-time insights, efficient tools, and
            transparent markets for a greener future.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-black text-black px-6 py-3 rounded hover:bg-gray-800">
              Register Now
            </button>
            <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200">
              Learn More
            </button>
          </div>
    <>
    
    <div className="font-sans text-gray-800">
      
       <section className="relative bg-cover bg-center h-[500px] flex flex-col justify-center items-center text-center text-black">
         
    <img src="https://www.axionpower.com/wp-content/uploads/2019/05/Solar-energy-panels-with-wind-turbines-on-orange-sky-web.jpg " style={{width:"400",height:"50%"}}></img>
       
         <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">

          Powering Tomorrow: Your Hub for Sustainable Energy Trading
        </h1>
        <p className="mt-4 max-w-xl text-lg">
          EnergyTrade Pro offers real-time insights, efficient tools, and
          transparent markets for a greener future.
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-3 bg-blue-600 rounded text-white hover:bg-blue-700">
            Register Now
          </button>
          <button className="px-6 py-3 bg-white text-blue-600 rounded hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </section>
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">Key Market Insights</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 border rounded shadow-sm bg-white flex flex-col items-center">
            <Zap className="w-6 h-6 mb-2 text-blue-600" />
            <div className="text-3xl font-bold">1.2 GW</div>
            <p className="text-gray-500">Energy Traded Today</p>
          </div>
          <div className="p-6 border rounded shadow-sm bg-white flex flex-col items-center">
            <DollarSign className="w-6 h-6 mb-2 text-blue-600" />
            <div className="text-3xl font-bold">$0.15/kWh</div>
            <p className="text-gray-500">Average Market Price</p>
          </div>
          <div className="p-6 border rounded shadow-sm bg-white flex flex-col items-center">
            <Leaf className="w-6 h-6 mb-2 text-blue-600" />
            <div className="text-3xl font-bold">78%</div>
            <p className="text-gray-500">Renewable Energy Share</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-10">Why Choose EnergyTrade Pro?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border rounded shadow-sm bg-white">
            <Activity className="w-6 h-6 mx-auto mb-3 text-blue-600" />
            <h3 className="font-bold mb-2">Real-time Market Insights</h3>
            <p className="text-gray-500">
              Access live data, price trends, and analytical tools to make
              informed trading decisions instantly.
            </p>
          </div>
          <div className="p-6 border rounded shadow-sm bg-white">
            <Shuffle className="w-6 h-6 mx-auto mb-3 text-blue-600" />
            <h3 className="font-bold mb-2">Diverse Trading Options</h3>
            <p className="text-gray-500">
              Trade various energy contracts, from traditional sources to
              certified renewable energy credits.
            </p>
          </div>
          <div className="p-6 border rounded shadow-sm bg-white">
            <Shield className="w-6 h-6 mx-auto mb-3 text-blue-600" />
            <h3 className="font-bold mb-2">Secure &amp; Compliant Platform</h3>
            <p className="text-gray-500">
              Benefit from industry-leading security protocols and full
              regulatory compliance for peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">
          Ready to Shape the Future of Energy Trading?
        </h2>
        <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800">
          Get Started Today
        </button>
      </section>
    </div>
    <Footer/>
    </>
    </>
  );
}