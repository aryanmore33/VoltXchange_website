import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserPen } from 'lucide-react'
import { useState , useRef } from 'react'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(()=>{
        const handleClickOutside = (e) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setOpen(false);
            }
        };
        document.addEventListener('mousedown' , handleClickOutside);
        return ()=> document.removeEventListener('mousedown' , handleClickOutside);
    } , []);
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
            <div className="flex gap-3 relative" ref={dropdownRef}>
                <button className="px-4 py-2 border rounded"><Link to="/Login">Login</Link></button>
                <button className=" px-4 py-2 bg-black text-white rounded-lg ">Register</button>
                <button onClick={()=> setOpen(!open)}>
                    <UserPen className="w-6 h-6" />
                </button>

                {open && (
                    <div className="absolute right-0 top-full mt-2 w-40 bg-white border rounded shadow-lg z-10 ">
                        <Link to ="/ProfileandSettings" className="block px-4 py-2 hover:bg-gray-100" onClick={()=> setOpen(false)}>Profile</Link>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick = {()=> {
                            setOpen(false);
                        }}>Logout</button>
                    </div>
                )}

            </div>
        </nav>

    )
}

export default Navbar
