import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import OnboardingForm from './Components/OnboardingForm'
import Dashboard from './Components/Dashboard'
import Landingpage from './Components/Landingpage'
import Footer from './Components/Footer '
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Sidebar/>
      <Login/>
      <OnboardingForm/>
      <Dashboard/>
      <Landingpage/>
      <Footer/>
    </>
  )
}

export default App
