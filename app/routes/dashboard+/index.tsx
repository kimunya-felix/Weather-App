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
    <div className="w-full flex">
      <div className="flex flex-col bg-white w-2/3 h-full pt-7 px-4 justify-between pb-10">
        <div className="flex gap-4 p-5 justify-between">
            <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold">January 2022</span>
                <span className="text-zinc-400">Thursday, Jan 4, 2022</span>
            </div>
            <div className="flex w-2/3 items-center justify-around">
                <div className="relative w-3/4 rounded-md">
                  <RiSearch2Line size={28} className="absolute left-3 top-3 text-zinc-400"/>
                  <input type="text" placeholder="Search location here" className="bg-[#FBFBFB] shadow-sm rounded-sm pl-12 w-full py-3"/>
                </div>
                <div className="p-4 rounded-sm bg-[#FBFBFB] shadow-sm"><FaRegBell size={20} color="#777"/></div> 
                <div className="p-4 rounded-sm bg-[#FBFBFB] shadow-sm"><FaRegUser size={20} color="#777"/></div>
            </div>
        </div>
        <div className="flex flex-col px-5 h-auto 2xl:h-2/5">
          <div className="flex w-full items-center justify-between">
            <span className="font-semibold text-xl">Today&apos;s overview</span>
            <Link to="" className="text-base flex items-center text-blue-500">
              More detail <RiExternalLinkLine className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 2xl:gap-4 h-full">
            <div className="flex items-center gap-5 bg-[#FBFBFB] shadow-sm rounded-md px-8">
              <LuWind size={35} color="#2F69FE" />
              <div className="flex flex-col gap-3 w-full">
                <p className="text-zinc-500">Wind Speed</p>
                <div className="flex items-center w-full gap-6">
                  <span className="font-normal text-4xl">12km/h</span>
                  <span className="flex text-normal text-zinc-500 gap-2 items-center"><FaCaretDown color="red"/> 2km/h</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-[#FBFBFB] shadow-sm rounded-md px-8">
              <WiRainMix size={40} color="#2F69FE" />
              <div className="flex flex-col gap-3 w-full">
                <p className="text-zinc-500">Rain Chance</p>
                <div className="flex items-center w-full gap-6">
                  <span className="font-normal text-4xl">24%</span>
                  <span className="flex text-normal text-zinc-500 gap-2 items-center"><FaCaretUp color="blue"/> 10%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-[#FBFBFB] shadow-sm rounded-md px-8">
              <FaWater size={30} color="#2F69FE" />
              <div className="flex flex-col gap-3 w-full">
                <p className="text-zinc-500">Pressure</p>
                <div className="flex items-center w-full gap-6">
                  <span className="font-normal text-4xl">720 hpa</span>
                  <span className="flex text-normal text-zinc-500 gap-2 items-center"><FaCaretUp color="blue"/> 32 hpa</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-[#FBFBFB] shadow-sm rounded-md px-8">
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
        </div>
        <div className="flex flex-col mx-5 h-auto 2xl:h-1/3 bg-[#FBFBFB] rounded-sm shadow-sm">
          <div className="flex w-full items-center justify-between">
            <span className="font-semibold text-xl">Average Weekly Temperature</span>
                      <Link to="" className="text-base flex items-center text-blue-500">
                        Tegal, Indonesia <IoIosArrowDown  className="ml-1" />
                      </Link>
          </div>
          <div className="w-full max-w-2xl h-full">
          {ApexChart && (
            <ApexChart
              options={chartOptions}
              series={series}
              type="area"
              height="100%"
            />
          )}
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#132B4E] w-1/3 h-full text-white p-10">
        <div className="flex flex-col w-full h-1/3 justify-between pb-10">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col gap-3">
              <span className="text-2xl">Mejasem Barat</span>
              <p className="text-lg">Tegal Indonesia</p>
            </div>
            <span className="text-2xl">08:54 AM</span>
          </div>
          <div className="flex items-end justify-between pb-10 border-b-[1px] border-gray-400">
            <div className="flex flex-col">
              <img src="app/images/cloudy.webp" alt="cloud" width={40}/>
              <span className="text-5xl">20{'\u00B0'} C</span>
            </div>
            <span className="text-xl text-right">Dramatic <br/> Cloudy</span>
          </div>
        </div>
        <div className="flex flex-col h-2/3 justify-around">
          <div className="flex flex-col gap-5">
            <span className="text-xl">Chance of Rain</span>
            <div className="flex flex-col gap-5">
              <span className="flex text-lg w-full justify-between">
                7 PM
                <div className="w-2/3 bg-[#294162] rounded-full h-6 dark:bg-gray-700">
                  <div className="bg-[#8CB1FC] h-6 rounded-full w-[44%]"></div>
                </div>
                44%
              </span>
  
              <span className="flex text-lg w-full justify-between">
                8 PM
                <div className="w-2/3 bg-[#294162] rounded-full h-6 dark:bg-gray-700">
                  <div className="bg-[#8CB1FC] h-6 rounded-full w-[30%]"></div>
                </div>
                30%
              </span>
  
              <span className="flex text-lg w-full justify-between">
                <span>9 PM</span>
                <div className="w-2/3 bg-[#294162] rounded-full h-6 dark:bg-gray-700">
                  <div className="bg-[#8CB1FC] h-6 rounded-full w-[67%]"></div>
                </div>
                67%
              </span>

              <span className="flex text-lg w-full justify-between">
                10 PM
                <div className="w-2/3 bg-[#294162] rounded-full h-6 dark:bg-gray-700">
                  <div className="bg-[#8CB1FC] h-6 rounded-full w-[45%]" ></div>
                </div>
                72%
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xl">Sunrise & Sunset</span>
              <span className="flex text-sm items-center">Tegal <IoIosArrowDown  className="ml-1" /></span>
            </div>
            <div className="flex justify-between items-center border-[1px] border-gray-400 p-3 bg-[#2A487C] rounded-md">
              <div className="flex">
                <MdOutlineWbSunny  size={40} color="gray" />
                <div className="flex flex-col">
                  <span className="text-base">Sunrise</span>
                  <span className="text-xl font-semibold">4:20 AM</span>
                </div>
              </div>
              <span className="text-sm">4 hours ago</span>
            </div>
            <div className="flex justify-between items-center border-[1px] border-gray-400 p-3 bg-[#2A487C] rounded-md">
              <div className="flex">
              <TbSunset2 size={40} color="gray" />
                <div className="flex flex-col">
                  <span className="text-base">Sunset</span>
                  <span className="text-xl font-semibold">5:50 PM</span>
                </div>
              </div>
              <span className="text-sm">in 9 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

