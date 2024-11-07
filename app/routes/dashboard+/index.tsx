// routes/dashboard.tsx
import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { FaCaretDown, FaCaretUp, FaRegBell, FaRegUser, FaWater } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LuWind } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiExternalLinkLine, RiSearch2Line } from "react-icons/ri";
import { WiRainMix } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "description", content: "User Dashboard" },
  ];
};

export default function Dashboard() {
  const [ApexChart, setApexChart]: any = useState();
  useEffect(() => {
    import('react-apexcharts').then((module) => {
      setApexChart(() => module.default);
    });
  }, []);

  const chartOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
      }
    },
    colors: ['#132B4E']
  };
  
  const series = [{
    name: 'Temperature (°C)',
    data: [10, 12, 20, 25, 30]
  }];

  return (
    <main className="w-full flex" role="main">
      <div className="flex flex-col bg-white w-2/3 h-full pt-7 px-4 justify-between pb-10">
        <header className="flex gap-4 p-5 justify-between" role="banner">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">January 2022</h1>
                <time dateTime="2022-01-04" className="text-zinc-400">Thursday, Jan 4, 2022</time>
            </div>
            <div className="flex w-2/3 items-center justify-around">
                <div className="relative w-3/4 rounded-md">
                  <label htmlFor="location-search" className="sr-only">Search location</label>
                  <RiSearch2Line size={28} className="absolute left-3 top-3 text-zinc-400" aria-hidden="true"/>
                  <input 
                    type="text" 
                    id="location-search"
                    placeholder="Search location here" 
                    className="bg-[#FBFBFB] shadow-sm rounded-sm pl-12 w-full py-3"
                  />
                </div>
                <button className="p-4 rounded-sm bg-[#FBFBFB] shadow-sm" aria-label="Notifications">
                  <FaRegBell size={20} color="#777" aria-hidden="true"/>
                </button>
                <button className="p-4 rounded-sm bg-[#FBFBFB] shadow-sm" aria-label="User profile">
                  <FaRegUser size={20} color="#777" aria-hidden="true"/>
                </button>
            </div>
        </header>

        <section className="flex flex-col px-5 h-auto 2xl:h-2/5" aria-labelledby="overview-title">
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
        </section>

        <section className="flex flex-col mx-5 h-auto 2xl:h-1/3 bg-[#FBFBFB] rounded-sm shadow-sm" aria-labelledby="temperature-chart">
          <div className="flex w-full items-center justify-between">
            <h2 id="temperature-chart" className="font-semibold text-xl">Average Weekly Temperature</h2>
            <button className="text-base flex items-center text-blue-500" aria-label="Select location">
              Tegal, Indonesia <IoIosArrowDown className="ml-1" aria-hidden="true"/>
            </button>
          </div>
          <div className="w-full max-w-2xl h-full" role="img" aria-label="Temperature trend chart">
            {ApexChart && (
              <ApexChart
                options={chartOptions}
                series={series}
                type="area"
                height="100%"
              />
            )}
          </div>
        </section>
      </div>

      <aside className="flex flex-col bg-[#132B4E] w-1/3 h-full text-white p-10" aria-label="Weather details">
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
      </aside>
    </main>
  );
}