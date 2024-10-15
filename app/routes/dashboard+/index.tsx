// routes/dashboard.tsx
import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { FaRegBell, FaRegUser } from "react-icons/fa";

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
            <div className="flex w-2/3">
                <input type="text" placeholder="Search location here" className="border rounded-md"/>
                <FaRegBell />
                <FaRegUser />
            </div>
        </div>
        <div className="flex">
          <div className="flex">
            <span>Today&apos;s Overview</span>
            <Link to="">More detail</Link>
          </div>
          <div className="grid"></div>
        </div>
      </div>
      <div className="flex bg-blue-950 w-2/5 h-full"></div>
    </div>
  );
}
