
import React, { useEffect, useState } from "react";

const Header = ({ totalTasks, completedTasks, activeTasks, overdueTasks }) => {
  const [theme, setTheme] = useState("dark");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    document.documentElement.classList.add("dark");

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900 shadow-lg pb-8">
      <header className="max-w-7xl mx-auto px-4 pt-6">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Top Row: Branding + Clock */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">TaskFlow</h1>
              <p className="text-sm text-gray-300 dark:text-gray-400">
                Advanced task management for productivity
              </p>
            </div>

            {/* Clock Section */}
            <div className="mt-4 md:mt-0 text-right text-white">
              <p className="text-lg font-semibold">{time.toLocaleTimeString()}</p>
              <p className="text-sm text-gray-300">{time.toLocaleDateString()}</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-indigo-600 text-white p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">{totalTasks}</h2>
              <p className="text-sm">Total Tasks</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">{completedTasks}</h2>
              <p className="text-sm">Completed</p>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">{activeTasks}</h2>
              <p className="text-sm">Active</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">{overdueTasks}</h2>
              <p className="text-sm">Overdue</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;



          // {/* Theme buttons commented out */}
          // {/*
          // <div className="flex space-x-2 mt-4 md:mt-0">
          //   <button
          //     onClick={() => setTheme("light")}
          //     className={`px-3 py-1 rounded ${
          //       theme === "light" ? "bg-blue-500 text-white" : "bg-gray-700"
          //     }`}
          //   >
          //     Light
          //   </button>
          //   <button
          //     onClick={() => setTheme("dark")}
          //     className={`px-3 py-1 rounded ${
          //       theme === "dark" ? "bg-blue-500 text-white" : "bg-gray-700"
          //     }`}
          //   >
          //     Dark
          //   </button>
          //   <button
          //     onClick={() => setTheme("system")}
          //     className={`px-3 py-1 rounded ${
          //       theme === "system" ? "bg-blue-500 text-white" : "bg-gray-700"
          //     }`}
          //   >
          //     System
          //   </button>
          // </div>
          // */}