import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import ProfileandSettings from './Components/ProfileandSettings'
// import Finance from './components/Finance '
// import Tradeexecution from './components/Tradeexecution '
import NotificationCenter from './Components/NotificationCenter'
import ContractandCompilance from './Components/ContractandCompilance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Sidebar/>
      <Login/>
      {/* <Finance/> */}
      {/* <Tradeexecution/> */}
      <ProfileandSettings/>
      <NotificationCenter/>
      <ContractandCompilance/>
    </>
  )
}

export default App
