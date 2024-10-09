// routes/dashboard.tsx
import { MetaFunction } from "@remix-run/node";
import { CiBellOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "description", content: "User Dashboard" },
  ];
};

export default function Dashboard() {
  return (
    <div className="p-4 w-full flex flex-col">
      <div className="flex bg-white">
        <div className="flex items-center">
            <div className="flex flex-col">
                <span className="text 2xl">January 2022</span>
                <span className="text-zinc-400">Thursday, Jan 4, 2022</span>
            </div>
            <div className="flex gap-4">
                <input type="text" placeholder="Search location here" className="border rounded-md"/>
                <CiBellOn />
                <FaRegUser />
            </div>
        </div>
      </div>
      <div className="flex bg-blue-950"></div>
    </div>
  );
}
