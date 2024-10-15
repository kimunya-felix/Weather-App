import { Outlet } from "@remix-run/react";
import Nav from "~/components/ui/Nav";

export default function Dashboard() {
    return (
        <div className="flex  w-screen h-screen">
            <Nav />
            <Outlet />
        </div>
    );
}