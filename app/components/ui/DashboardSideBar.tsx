import { IoIosArrowDown } from "react-icons/io"
import { MdOutlineWbSunny } from "react-icons/md"
import { TbSunset2 } from "react-icons/tb"

const DashboardSideBar = () => {
  return (
    <>
      <section className="flex flex-col w-full h-1/3 justify-between pb-10" aria-labelledby="location-header">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col gap-3">
              <h2 id="location-header" className="text-2xl">Mejasem Barat</h2>
              <p className="text-lg">Tegal Indonesia</p>
            </div>
            <time dateTime="08:54" className="text-2xl">08:54 AM</time>
          </div>
          <div className="flex items-end justify-between pb-10 border-b-[1px] border-gray-400">
            <div className="flex flex-col">
              <img src="app/images/cloudy.webp" alt="Cloudy weather" width={40}/>
              <span className="text-5xl" aria-label="20 degrees celsius">20{'\u00B0'} C</span>
            </div>
            <span className="text-xl text-right">Dramatic <br/> Cloudy</span>
          </div>
        </section>

        <section className="flex flex-col h-2/3 justify-around">
          <div className="flex flex-col gap-5" aria-labelledby="rain-chance">
            <h2 id="rain-chance" className="text-xl">Chance of Rain</h2>
            <div className="flex flex-col gap-5">
              {[
                { time: "7 PM", percentage: 44 },
                { time: "8 PM", percentage: 30 },
                { time: "9 PM", percentage: 67 },
                { time: "10 PM", percentage: 72 }
              ].map((item) => (
                <div key={item.time} className="flex text-lg w-full justify-between" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow={item.percentage} aria-label={`Rain chance at ${item.time}`}>
                  {item.time}
                  <div className="w-2/3 bg-[#294162] rounded-full h-6">
                    <div 
                      className="bg-[#8CB1FC] h-6 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  {item.percentage}%
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2" aria-labelledby="sun-schedule">
            <div className="flex justify-between items-center mb-3">
              <h2 id="sun-schedule" className="text-xl">Sunrise & Sunset</h2>
              <button className="flex text-sm items-center" aria-label="Select location">
                Tegal <IoIosArrowDown className="ml-1" aria-hidden="true"/>
              </button>
            </div>
            <div className="flex justify-between items-center border-[1px] border-gray-400 p-3 bg-[#2A487C] rounded-md">
              <div className="flex">
                <MdOutlineWbSunny size={40} color="gray" aria-hidden="true"/>
                <div className="flex flex-col">
                  <span className="text-base">Sunrise</span>
                  <time dateTime="04:20" className="text-xl font-semibold">4:20 AM</time>
                </div>
              </div>
              <span className="text-sm">4 hours ago</span>
            </div>
            <div className="flex justify-between items-center border-[1px] border-gray-400 p-3 bg-[#2A487C] rounded-md">
              <div className="flex">
                <TbSunset2 size={40} color="gray" aria-hidden="true"/>
                <div className="flex flex-col">
                  <span className="text-base">Sunset</span>
                  <time dateTime="17:50" className="text-xl font-semibold">5:50 PM</time>
                </div>
              </div>
              <span className="text-sm">in 9 hours</span>
            </div>
          </div>
        </section>
    </>
  )
}

export default DashboardSideBar
