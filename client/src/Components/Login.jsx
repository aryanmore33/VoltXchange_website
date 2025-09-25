import { useState } from "react";
import { Mail, Lock } from "lucide-react"; // For icons
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    
    <div className="flex items-center justify-center">
    <div className="min-h-screen flex items-center justify-center bg-gray-100 border rounded-lg  w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
    {/* // <div className="min-h-screen flex items-center justify-center bg-gray-200"> */}
    {/* //   <div className="w-80 h-60 bg-white rounded-2xl shadow-lg p-6"> */}
      
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-6">
          Enter your credentials to access your account.
        </p>

    
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email or Phone Number</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>
        </div>

   
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-grey-400 w-5 h-5" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-1 top-1 text-gray-500"
            >
              {showPassword ? "See" : "Hide"}
            </button>
          </div>
        </div>

       
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" className="rounded" />
            <span>Remember me</span>
          </label>
        </div>

        <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition">
          Sign In
        </button>

       
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400 text-sm justify-center">OR CONTINUE WITH</span>
          <hr className="flex-grow border-gray-300" />
        </div>

       
        <div className="space-y-3 mb-4">
          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-50">
            Sign in with Google
          </button>
          </div>
         <div className="mb-4"> <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-50">
            📝 Sign in with NotepadTextDashed
          </button>
        </div>

      
        <p className="text-center text-gray-600 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-black font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}
