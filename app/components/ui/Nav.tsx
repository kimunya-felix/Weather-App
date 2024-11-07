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
    <nav 
      className="flex flex-col bg-slate-100 w-[350px] p-6 h-full"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex gap-4 items-center h-[100px]" role="banner">
        <img src="/app/images/srawana.webp" alt="Srawana app logo" width={40}/>
        <Link to="/" className="font-poppins text-blue-700 font-bold text-2xl" aria-label="Srawana home">Srawana</Link>
      </div>

      <div className="flex flex-col justify-between p-4 h-full">
        <div role="menu" className="flex flex-col gap-8" aria-label="Main menu">
            <div className="flex gap-4 text-blue-600 font-medium items-center">
                <IoHomeOutline size={20} aria-hidden="true"/>
                <Link to="/dashboard" role="menuitem" tabIndex={0}>Dashboard</Link>
            </div>
            <div className="flex gap-4 items-center text-zinc-500">
                <GrMapLocation size={20} aria-hidden="true"/>
                <Link to="/map" role="menuitem" tabIndex={0}>Map</Link>
            </div>
            <div className="flex gap-4 items-center text-zinc-500">
                <MdOutlineShareLocation size={20} aria-hidden="true"/>
                <Link to="/saved-location" role="menuitem" tabIndex={0}>Saved Location</Link>
            </div>
            <div className="flex gap-4 items-center text-zinc-500">
                <FaRegCalendarAlt size={20} aria-hidden="true"/>
                <Link to="/calendar" role="menuitem" tabIndex={0}>Calendar</Link>
            </div>
        </div>

        <div role="menu" className="flex flex-col gap-5" aria-label="System menu">
            <Link to="/system" role="menuitem" tabIndex={0} className="text-zinc-500">System</Link>
            <div className="flex flex-col gap-8 pl-2">
                <div className="flex gap-4 items-center text-zinc-500">
                    <IoSettingsOutline size={20} aria-hidden="true"/>
                    <Link to="/settings" role="menuitem" tabIndex={0}>Setting</Link>
                </div>
                <div className="flex gap-4 items-center text-red-500">
                    <SlLogout size={20} aria-hidden="true"/>
                    <Link to="/logout" role="menuitem" tabIndex={0}>Logout Account</Link>
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav