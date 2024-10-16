// routes/dashboard.tsx
import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { FaCaretDown, FaCaretUp, FaRegBell, FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LuWind } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
import { WiDust, WiRainMix } from "react-icons/wi";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "description", content: "User Dashboard" },
  ];
};

export default function Dashboard() {
  return (
    <div className="w-full flex">
      <div className="flex flex-col bg-white w-3/5 h-full pt-7">
        <div className="flex gap-4 p-5 justify-between">
            <div className="flex flex-col">
                <span className="text-2xl font-bold">January 2022</span>
                <span className="text-zinc-400">Thursday, Jan 4, 2022</span>
            </div>
            <div className="flex w-2/3 items-center justify-around">
                <input type="text" placeholder="Search location here" className="border w-3/4 px-5 py-2 rounded-md"/>
                <FaRegBell size={20} color="#777"/>
                <FaRegUser size={20} color="#777"/>
            </div>
        </div>
        <div className="flex flex-col px-5 h-auto 2xl:h-1/2">
          <div className="flex w-full items-center justify-between">
            <span className="font-bold text-lg">Today&apos;s Overview</span>
                      <Link to="" className="text-sm flex items-center text-blue-500">
                        More detail <RiExternalLinkLine className="ml-1" />
                      </Link>
          </div>
          <div className="grid grid-cols-2 p-8 gap-8 2xl:gap-0 h-full">
            <div className="flex items-center gap-5">
              <LuWind size={40} color="skyblue" />
              <div className="flex flex-col gap-3 w-full">
                <p className="text-zinc-500">Wind Speed</p>
                <div className="flex items-center w-full gap-6">
                  <span className="font-bold text-4xl">12km/h</span>
                  <span className="flex text-normal text-zinc-500 gap-2 items-center"><FaCaretDown color="red"/> 2km/h</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <WiRainMix size={40} color="skyblue" />
              <div className="flex flex-col gap-3 w-full">
                <p className="text-zinc-500">Rain Chance</p>
                <div className="flex items-center w-full gap-6">
                  <span className="font-bold text-4xl">24%</span>
                  <span className="flex text-normal text-zinc-500 gap-2 items-center"><FaCaretUp color="blue"/> 10%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <WiDust size={40} color="skyblue" />
              <div className="flex flex-col gap-3 w-full">
                <p className="text-zinc-500">Pressure</p>
                <div className="flex items-center w-full gap-6">
                  <span className="font-bold text-4xl">720 hpa</span>
                  <span className="flex text-normal text-zinc-500 gap-2 items-center"><FaCaretUp color="blue"/> 32 hpa</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <MdOutlineWbSunny  size={40} color="skyblue" />
              <div className="flex flex-col gap-3 w-full">
                <p className="text-zinc-500">Uv Index</p>
                <div className="flex items-center w-full gap-6">
                  <span className="font-bold text-4xl">12km/h</span>
                  <span className="flex text-normal text-zinc-500 gap-2 items-center"><FaCaretDown color="red"/> 0,3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-5 h-auto 2xl:h-1/3">
          <div className="flex w-full items-center justify-between">
            <span className="font-bold text-lg">Average Weekly Temperature</span>
                      <Link to="" className="text-sm flex items-center text-blue-500">
                        Tegal, Indonesia <IoIosArrowDown  className="ml-1" />
                      </Link>
          </div>
          <div className="w-full max-w-2xl h-full">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
      <div className="flex bg-blue-950 w-2/5 h-full text-white p-5">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <span className="text-lg">Mejasem Barat</span>
            <p>Tegal Indonesia</p>
          </div>
          <span>08:54 AM</span>
        </div>
        
      </div>
    </div>
  );
}

const chartData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Temperature (°C)',
      data: [10, 12, 20, 25, 30],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};
