import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
import RegistrationForm from './Components/RegistrationForm'





function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <Navbar/>
      <Landingpage/>
      <Login/>
      <OnboardingForm />
      <Dashboard />
      <Sidebar/>
      <Tradeexecution/>
      <Insights/>
      <Finance/>
      <ContractandCompilance/>
      <NotificationCenter/>
      <ContractandCompilance/>
      <RegistrationForm/>
      <ProfileandSettings/>
      <Footer/>
      
    
      
      
    </>
  )
}

export default App
