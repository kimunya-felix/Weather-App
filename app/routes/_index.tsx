import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Nav from "~/components/ui/Nav";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Nav />
      <Outlet />
    </div>
  );
}
