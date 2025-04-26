import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function toggleAdminSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* mobile toggle button */}
      <div className="flex lg:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleAdminSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 font-medium text-xl">Admin Dashboard</h1>
      </div>
      {/* overlay of mobile side bar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-10 bg-opacity-50 lg:hidden" onClickCapture={toggleAdminSidebar}></div>
      )}

      {/* sidebar */}
      <div className={`bg-gray-900 min-h-screen w-64 text-white absolute md:relative transform ${isSidebarOpen ? "translate-x-0":"-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
        <AdminSidebar/>
      </div>

      {/* main contenet */}
      <div className="flex flex-grow p-6 overflow-auto">
        <Outlet/>
      </div>
    </div>
  );
}

export default AdminLayout;
