import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 shadow-md">
            <div className="logo text-2xl font-bold " >Logo</div>
            <ul className="flex md:flex gap-6 " >
                <li className="hover: text-black hover:font-semibold transition-colors duration-200">Home</li>
                <li className="hover: text-black hover:font-semibold transition-colors duration-200">DashBoard</li>
                <li className="hover: text-black hover:font-semibold transition-colors duration-200">Marketplace</li>
                <li className="hover: text-black hover:font-semibold transition-colors duration-200">Trade</li>
                <li className="hover: text-black hover:font-semibold transition-colors duration-200">Analytics</li>
                <li className="hover: text-black hover:font-semibold transition-colors duration-200">Wallet</li>
                <li className="hover: text-black hover:font-semibold transition-colors duration-200">Contracts</li>
            </ul>
            <div className="flex gap-3">
                <button className= "px-4 py-2 border rounded">Login</button>
                <button className= " px-4 py-2 bg-black text-white rounded-lg ">Register</button>
            </div>
        </nav>

    )
}

export default Navbar
