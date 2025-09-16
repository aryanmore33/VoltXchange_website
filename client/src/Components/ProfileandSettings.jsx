import React from 'react'
import { UserRound, ShieldCheck, Settings , CircleUserRound} from "lucide-react"
import {useState} from "react"


const ProfileandSettings = () => {
  const [activeTab , setActiveTab] =useState("profile")

  const [profilePhoto, setProfilePhoto] = useState("https://via.placeholder.com/100")

  const handlePhotoChange =(e)=>{
    const file=e.target.files[0]
    if(file){
      const reader = new FileReader();
      reader.onloadend=()=>{
        setProfilePhoto(reader.result);
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 shadow-md p-6 border-2 border-solid border-gray-200 " >
        <h2 className="text-xl font-semibold mb-6">Account</h2>
        <ul className="space-y-4">
          <li>
            <button onClick={()=>setActiveTab("profile")} className={`flex items-center gap-1 w-full text-left px-3 py-2 rounded-md hover:cursor-pointer ${activeTab === "profile" ? "bg-black text-white font-medium" : "hover: bg-gray-100"} `} >
              <UserRound className="w-5 h-5" />My Profile
            </button>
          </li>
          <li>
            <button onClick={()=>setActiveTab("security")} className={`flex items-center gap-1 w-full text-left px-3 hover:cursor-pointer ${activeTab === "security" ? "bg-black text-white font-medium" : "hover: bg-gray-100"} `}>
              <ShieldCheck />Security
            </button>
          </li>
          <li>
            <button onClick={()=>setActiveTab("preferences")} className={`flex items-center gap-1 w-full text-left px-3 hover:cursor-pointer ${activeTab=== "preferences" ? "bg-black text-white font-medium": "hover:bg-gray-100"} `}><Settings />Preferences</button>
          </li>
        </ul>

      </aside>
      <main className="flex-1">
        <h1 className="font-bold text-2xl mt-4 ml-4">Profile & Settings</h1>
        <p className='mt-2 ml-4'>Manage your account details , security, and application Preferences</p>
        <div className="flex justify-center mt-4 ">
          <button className={`btn btn-outline w-50 h-8 rounded-none px-4 py-2 hover:bg-black hover:text-white ${activeTab==="profile" ? "border-b-2 border-black font-semibold" : "text-gray-500"}`} onClick = {()=> setActiveTab("profile")}>My Profile</button>
          <button className={`btn btn-outline w-50 h-8 rounded-none hover:bg-black hover:text-white ${activeTab==="profile" ? "border-b-2 border-black font-semibold" : "text-gray-500"} `}onClick = {()=> setActiveTab("security")}>Security</button>
          <button className="btn btn-outline w-50 h-8 rounded-none hover:bg-black hover:text-white ">Preferences</button>

        </div>
        {activeTab=== "profile" && (
          <div className="space-y-8 ">
            <section className='bg-white p-6 rounded-md shadow mt-8'>
              <h2 className="text-lg font-semibold mb-2">My Profile Photo</h2>
              <p className="text-sm text-gray-500 mb-4">Update your profile picture here</p>
              <div>
                
                <img src={profilePhoto} alt="profile" className=""/>
                <label htmlFor="photoUpload" className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-200"><CircleUserRound className="w-5 h-5"/>Change Photo</label>
                <input type="file" id="photoUpload" accept="image/*" className="hidden" onChange={handlePhotoChange}/>
              </div>
            </section>
            <section className="bg-white p-6 rounded-md shadow">
              <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
              <p className="text-sm text-gray-500 mb-4">Update Your Personal deatils</p>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <lable htmlFor="name"> Full Name
                  <input type="text" id="name" placeholder="Enter Name" defaultValue="Liam Basil" className="ml-2 border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-900"/>
                </lable>
                <lable htmlFor="email"> Email Address
                  <input type="email" id="email" placeholder='Enter email' defaultValue="liam.basil@energytradepro.com" className="ml-2 border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-900"/>
                </lable>
                <lable htmlFor="phone">Phone Number
                  <input type="phone" id="phone" placeholder="Enter Phone Number" defaultValue="+91 9820184433" className="ml-2 border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-900"/>
                </lable>
                <lable htmlFor="date">DOB
                  <input id="date" type="date" defaultValue="16-08-2006" className="ml-2 border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-900"/>
                </lable>
              </form>
            </section>
            <section className="bg-white p-6 rounded-md shadow">
              <h1 className="text-lg font-semibold mb-2">Contact Information</h1>
              <p className="text-sm text-gray-500 mb-4">Update your Company details</p>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <lable htmlFor="company"> Company Name
                  <input type="text" id="company" placeholder='Company Name' defaultValue="Green Energy Solution Inc." className="ml-2 border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-900"/>
                </lable>
                <lable htmlFor="role">Role
                  <input type="text" id="role" placeholder='Role' defaultValue="Senior Trader" className="ml-2 border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-900"/>
                </lable>
                <lable htmlFor="industryType">Role
                  <input type="text" id="industryType" placeholder='Industry Type' defaultValue="Renewable Energy" className="ml-2 border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-900"/>
                </lable>
              </form>
            </section>
          </div>
        )}

        {activeTab==="security" && (<p className="text-gray-600">Security Settins</p>)}
      </main>
    </div>
  )
}

export default ProfileandSettings