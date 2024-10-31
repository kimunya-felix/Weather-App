import { Link } from "@remix-run/react"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GrMapLocation } from "react-icons/gr"
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5"
import { MdOutlineShareLocation } from "react-icons/md"
import { SlLogout } from "react-icons/sl"
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const Nav = () => {
  return (
    <div className="flex flex-col bg-slate-100 w-[350px] p-6 h-full">
      <div className="flex gap-4 items-center h-[100px]">
        <img src="/app/images/srawana.png" alt="logo" width={40}/>
        <Link to="/" className="font-poppins text-blue-700 font-bold text-2xl">Srawana</Link>
      </div>

      <div className="flex flex-col justify-between p-4 h-full">
        <div className="flex flex-col gap-8">
            <div className="flex gap-4 text-blue-600 font-medium items-center">
                <IoHomeOutline size={20}/>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="flex gap-4 items-center text-zinc-500">
                <GrMapLocation size={20}/>
                <Link to="/map">Map</Link>
            </div>
            <div className="flex gap-4 items-center text-zinc-500">
                <MdOutlineShareLocation size={20}/>
                <Link to="/saved-location">Saved Location</Link>
            </div>
            <div className="flex gap-4 items-center text-zinc-500">
                <FaRegCalendarAlt size={20}/>
                <Link to="/calendar">Calendar</Link>
            </div>
        </div>

        <div className="flex flex-col gap-5">
            <Link to="/system" className="text-zinc-500">System</Link>
            <div className="flex flex-col gap-8 pl-2">
                <div className="flex gap-4 items-center text-zinc-500">
                    <IoSettingsOutline size={20}/>
                    <Link to="/settings">Setting</Link>
                </div>
                <div className="flex gap-4 items-center text-red-500">
                    <SlLogout size={20}/>
                    <Link to="/logout">Logout Account</Link>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}


export default Nav