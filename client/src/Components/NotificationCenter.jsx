import React from 'react'
import { Bell, Lightbulb } from "lucide-react"
import { useState, } from 'react'

const initialNotifications = [
  { id: 1, category: "Marketplace", title: "New Offer: Solar Energy Available", description: "A new energy contract is available at ", icon: <Lightbulb /> },
  { id: 2, category: "Marketplace", title: "Contract", description: "Your contract is set to expire in 7 days" },
  { id: 3, category: "Marketplace", title: "Contract", description: "Your contract is set to expire in 7 days" }
]

const NotificationCenter = () => {



  const [notifications, setNotifications] = useState(initialNotifications)
  // console.log("notfication ", notifications)

  const handleRemove = (id) => {
    setNotifications((prev) => prev.filter((note) => note.id !== id))
  }

  const [activeTab , setActiveTab] = useState("All")

  const tabs=["All" , "Marketplace" , "Contacts" , "System"]

  const [priceAlertEnabled, setPriceAlertEnabled] = useState(false);
  const [contractAlertEnabled , setContractAlertEnabled] = useState(false);
  const [marketAlertEnabled , setMarketAlertEnabled] = useState(false)


  const [threshold,setThreshold] = useState("0.10")
  const [ condition,setCondition] = useState("Below")
  const [days , setDays] =useState("7")
  const [keyword , setKeyword] =useState("renewable energy")

  function Toggle ({enabled , setEnabled }) {
    return(
      <button type="button" onClick = { ()=> setEnabled(!enabled)} className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors duration-300 ease-in-out ${enabled ? "bg-black" : "bg-gray-500"}`}>
        <span className={`inline-block  h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${enabled ? "translate-x-6" : "translate-x-0"}`}></span>
      </button>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside className="w-50 shaddow-md px-4 py-6 border-solid border-gray-200 border-2">
        <div>
          <h1 className="mb-3">Communication</h1>
          <ul className="ml-4">
            <li><button className="flex items-center gap-2 w-full"><Bell />Alert</button></li>
            <li>Preferences</li>
          </ul>
        </div>
      </aside>
      {/* 2nd Part Notification */}
      <div className="flex-1 max-w-[900px] shadow-md mt-4 ml-4 px-4 py-6 border-rounded border-solid border-gray-200 border-2">
        <h1 className="text-xl font-bold">Notification center</h1>
       <div className='flex w-full'>
        {tabs.map((tab)=>(
          <button key={tab} onClick={()=> setActiveTab(tab)} className={`px-4 py-2 rounded-md ${activeTab == tab ? "bg-white" : "bg-gray-200"}`}>{tab}</button>
        ))}
       </div>
        {/* Notifications */}

        <div>
          {notifications.map((note) => {
            return (
              <div key={note.id} className=' relative flex items-start   mb-3 border-l-3  py-2 px-6  border-black  bg-gray-100'>
                <div className=" flex gap-3 ">
                  <div>{note.icon}</div>
                  <div><h3 className='text-lg font-semibold'>{note.title}</h3>
                    <p className="text-gray-500 text-sm">{note.description}</p> </div>
                  <button className=' absolute top-1 right-2 text-gray-400 hover:text-red-500 hover:cursor-pointer ' onClick={() => handleRemove(note.id)}>x</button>
                </div></div>

            );
          })}
        </div>
      </div>
      {/* Alert Side */}
      <div>
        <h1 className="font-bold text-xl m-5">Alert Management</h1>
        {/* price alerts */}

        <div className="border border-gray-300 p-4 rounded-lg shadow-sm ml-5">
          <h3 className="font-semibold">Price Alerts</h3>
          <p className="text-sm text-gray-500">Get notified about significant price movements</p>
          <div className="flex items-center justify-between mt-2">
            <label className="mr-5">Enable Price Alerts</label>
            <Toggle enabled={priceAlertEnabled} setEnabled={setPriceAlertEnabled}/>
            
          </div>

          {priceAlertEnabled && (
            <div className="mt-3 space-y-2">
              <div>
                <label className="block text-sm">Threshold</label>
                <input type="number" step="0.01" value={threshold} onChange={(e)=> setThreshold(e.target.value)} className="mt-2 border rounded p-1 w-full" />
              </div>
              <div>
                <label className="block text-sm">Condition</label>
                <select value={condition} onChange={(e)=> setCondition(e.target.value)} className="mt-2 border rounded p-1 w-full">
                  <option value="Below">Below</option>
                  <option value="Above">Above</option>
                </select>
              </div>
            </div>
          )}
        </div>
            {/* Contract Alerts */}

        <div className=" mt-4 border border-gray-300 p-4 rounded-lg shadow-sm ml-5">
          <h3 className="font-semibold">Contract Alerts</h3>
          <p className="text-gray-500 text-sm">Recieve notifications regarding your active contracts</p> 
          <div className="flex items-center justify-between mt-2">
            <label className="mr-5">Enable Contract Alerts</label>
            <Toggle enabled={contractAlertEnabled} setEnabled={setContractAlertEnabled}/>
          </div>

          {contractAlertEnabled && (
            <div className="mt-3 space-y-2">
              <div>
                <label className="block text-sm font-semibold">Notify me before expiration (days)</label>
                <input type="number" step="1" value={days} onChange={(e)=> setDays(e.target.value)} className="mt-2 border rounded p-1 w-full "/>
              </div>
            </div>
          )}

        </div>


        {/* Marketplace Alert */}
        <div className="border border-gray-300 shadow-sm rounded-lg mt-4 p-4 ml-5">
          <h3 className="font-semibold">Marketplace Alerts</h3>
          <p className="text-sm text-gray-500">Stay informed about new offers matching your preferences</p>
          <div className="flex items-center justify-between mt-2">
            <label>Enable Marketplace Alerts</label>
            <Toggle enabled={marketAlertEnabled} setEnabled={setMarketAlertEnabled}/>
            </div>

            {marketAlertEnabled && (
              <div className="mt-3 space-y-2">
                <div>
                  <label className="text-sm font-semibold">Keywords for new offers</label>
                  <input type="text" value={keyword} onChange={(e)=> setKeyword(e.target.value)}className="border rounded p-1 mt-2 w-full"/>
                </div>
              </div>
            )}
          
        </div>
        <div>Notification Channels</div>

        <div>
          <button>Reset To Default</button>
          <button>Save Preferences</button>
        </div>
      </div>


    </div>
  )
}

export default NotificationCenter
