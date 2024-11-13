import { Link } from "@remix-run/react"
import { FaCaretDown, FaCaretUp, FaWater } from "react-icons/fa"
import { LuWind } from "react-icons/lu"
import { MdOutlineWbSunny } from "react-icons/md"
import { RiExternalLinkLine } from "react-icons/ri"
import { WiRainMix } from "react-icons/wi"

const WeatherOverview = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between">
            <h2 id="overview-title" className="font-semibold text-xl">Today&apos;s overview</h2>
            <Link to="" className="text-base flex items-center text-blue-500" aria-label="View more details">
              More detail <RiExternalLinkLine className="ml-1" aria-hidden="true"/>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 2xl:gap-4 h-full">
            <div className="flex items-center gap-5 bg-[#FBFBFB] shadow-sm rounded-md px-8" aria-label="Wind speed statistics">
              <LuWind size={35} color="#2F69FE" aria-hidden="true"/>
              <div className="flex flex-col gap-3 w-full">
                <h3 className="text-zinc-500">Wind Speed</h3>
                <div className="flex items-center w-full gap-6">
                  <span className="font-normal text-4xl">12km/h</span>
                  <span className="flex text-normal text-zinc-500 gap-2 items-center">
                    <FaCaretDown color="red" aria-hidden="true"/> 
                    <span aria-label="Decreased by 2 kilometers per hour">2km/h</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-[#FBFBFB] shadow-sm rounded-md px-8" aria-label="Rain probability statistics">
              <WiRainMix size={40} color="#2F69FE" />
              <div className="flex flex-col gap-3 w-full">
                <p className="text-zinc-500">Rain Chance</p>
                <div className="flex items-center w-full gap-6">
                  <span className="font-normal text-4xl">24%</span>
                  <span className="flex text-normal text-zinc-500 gap-2 items-center"><FaCaretUp color="blue"/> 10%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-[#FBFBFB] shadow-sm rounded-md px-8" aria-label="Atmospheric pressure statistics">
              <FaWater size={30} color="#2F69FE" />
              <div className="flex flex-col gap-3 w-full">
                <p className="text-zinc-500">Pressure</p>
                <div className="flex items-center w-full gap-6">
                  <span className="font-normal text-4xl">720 hpa</span>
                  <span className="flex text-normal text-zinc-500 gap-2 items-center"><FaCaretUp color="blue"/> 32 hpa</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-[#FBFBFB] shadow-sm rounded-md px-8" aria-label="UV Radiation statistics">
              <MdOutlineWbSunny  size={40} color="#2F69FE" />
              <div className="flex flex-col gap-3 w-full">
                <p className="text-zinc-500">Uv Index</p>
                <div className="flex items-center w-full gap-6">
                  <span className="font-normal text-4xl">2,3</span>
                  <span className="flex text-normal text-zinc-500 gap-2 items-center"><FaCaretDown color="red"/> 0,3</span>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default WeatherOverview
