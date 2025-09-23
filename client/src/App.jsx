import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import NotificationCenter from './Components/NotificationCenter'
import ContractandCompilance from './Components/ContractandCompilance'

import ProfileandSettings from './Components/ProfileandSettings'
import Finance from './Components/Finance'
import Tradeexecution from './Components/Tradeexecution'
import Landingpage from './Components/Landingpage'
import OnboardingForm from './Components/OnboardingForm'
import Dashboard from './Components/Dashboard'
import Footer from './Components/Footer'
import Insights from './Components/Insights'





function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} /> 
        <Route path="/Login" element={<Login />} /> 
         <Route path="/OnboardingForm" element={<OnboardingForm />} /> 
         <Route path="/Dashboard" element={<Dashboard />} /> 
         <Route path="/Sidebar" element={<Sidebar />} /> 
         <Route path="/Tradeexecution" element={<Tradeexecution />} /> 
         <Route path="/Insights" element={<Insights />} /> 
         <Route path="/Finance" element={<Finance />} /> 
         <Route path="/ContractandCompilance" element={<ContractandCompilance />} /> 
         <Route path="/Notification" element={<Notification />} /> 
         <Route path="/ProfileandSettings" element={<ProfileandSettings />} />  
         
         

      </Routes>




    </>
  )
}

export default App
