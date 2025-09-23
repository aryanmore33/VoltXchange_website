import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 shadow-md">
            <div className="logo text-2xl font-bold " >Logo</div>
            <ul className="flex md:flex gap-6 " >
                 <li className="hover: text-black hover:font-semibold transition-colors duration-200"><Link to="/">Home</Link></li> 
                 <li className="hover: text-black hover:font-semibold transition-colors duration-200"><Link to="/Dashboard">DashBoard</Link></li> 
                 <li className="hover: text-black hover:font-semibold transition-colors duration-200"><Link to="/Sidebar">Marketplace</Link></li>
                <li className="hover: text-black hover:font-semibold transition-colors duration-200"><Link to="Tradeexecution" >Trade</Link></li>
                <li className="hover: text-black hover:font-semibold transition-colors duration-200"><Link to="/Insights" >Analytics</Link></li>
                <li className="hover: text-black hover:font-semibold transition-colors duration-200"><Link to="/Finance" >Wallet</Link></li>                                                                        
                <li className="hover: text-black hover:font-semibold transition-colors duration-200"><Link to="ContractandCompilance">Contracts</Link></li> 
                {/* <Link to="/">Home</Link> */}
            </ul>
            <div className="flex gap-3">
                <button className= "px-4 py-2 border rounded"><Link to="/Login">Login</Link></button>
                <button className= " px-4 py-2 bg-black text-white rounded-lg ">Register</button>
            </div>
        </nav>

    )
}

export default Navbar
