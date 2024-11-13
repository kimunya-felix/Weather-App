// routes/dashboard.tsx
import { MetaFunction } from "@remix-run/node";
import { IoIosArrowDown } from "react-icons/io";
import { WeatherApexChart } from "~/components/ui/WeatherApexChart";
import WeatherOverview from "~/components/ui/WeatherOverview";
import DashboardSideBar from "~/components/ui/DashboardSideBar";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegBell, FaRegUser } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "description", content: "User Dashboard" },
  ];
};

export default function Dashboard() {
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
          <WeatherOverview />
        </section>

        <section className="flex flex-col mx-5 h-auto 2xl:h-1/3 bg-[#FBFBFB] rounded-sm shadow-sm" aria-labelledby="temperature-chart">
          <div className="flex w-full items-center justify-between">
            <h2 id="temperature-chart" className="font-semibold text-xl">Average Weekly Temperature</h2>
            <button className="text-base flex items-center text-blue-500" aria-label="Select location">
              Tegal, Indonesia <IoIosArrowDown className="ml-1" aria-hidden="true"/>
            </button>
          </div>
          <div className="w-full max-w-2xl h-full" role="img" aria-label="Temperature trend chart">
            <WeatherApexChart />
          </div>
        </section>
      </div>

      <aside className="flex flex-col bg-[#132B4E] w-1/3 h-full text-white p-10" aria-label="Weather details">
        <DashboardSideBar />
      </aside>
    </main>
  );
}