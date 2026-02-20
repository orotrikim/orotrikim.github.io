import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer"; // 1. Make sure this is imported

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F0F0F]">
      <Header />
      
      {/* The flex-grow ensures the footer stays at the bottom even on short pages */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer /> {/* 2. Place it here */}
    </div>
  );
}