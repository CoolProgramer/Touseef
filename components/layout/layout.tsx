"use client";
import { useState } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="bg-gray-800 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">My App</h1>
          <button
            className="p-2 rounded-md bg-gray-700 hover:bg-gray-600"
            onClick={toggleSidebar}
          >
            Open Sidebar
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-4">{children}</main>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Content */}
        <nav>
          <ul className="p-4">
            <li className="mb-2">
              <a className="block text-gray-300 hover:text-white" href="#link1">
                Link 1
              </a>
            </li>
            <li className="mb-2">
              <a className="block text-gray-300 hover:text-white" href="#link2">
                Link 2
              </a>
            </li>
            <li className="mb-2">
              <a className="block text-gray-300 hover:text-white" href="#link3">
                Link 3
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 sticky bottom-0 z-10">
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};
