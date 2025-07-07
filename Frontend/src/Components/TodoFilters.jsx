import React, { useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import { unToggleAll } from "../Redux/Action";
import { useDispatch } from "react-redux";
import { toggleAll } from "../Redux/Action";


const TodoFilter = ({ activeCount, completedCount,filterTodo }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("All Categories");
  const [priority, setPriority] = useState("All Priorities");
  const [status, setStatus] = useState("All ");
  const [sortBy, setSortBy] = useState("Date Created");
  const [searchText, setSearchText] = useState("");
  const [toggle, setToggle] = useState(false);
  const categories = [
    "All Categories",
    "Personal",
    "Work",
    "Shopping",
    "Health",
    "Learning",
  ];
  const priorities = ["All Priorities", "Low", "Medium", "High"];
  const sortOptions = ["Date Created", "Due Date", "Priority"];

  const handleToggleAll = () => {
    dispatch(toggleAll());
    setToggle(!toggle);
  };
  const handleUnToggleAll = () => {
    dispatch(unToggleAll());
    setToggle(!toggle);
  };
  useEffect(() => {
   
      filterTodo({
        searchText,
        category,
        priority,
        status,
        sortBy,
      })
    ;
  },[category, priority, status, sortBy, searchText]);


  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-full max-w-5xl mx-auto">
      {/* Search Bar */}
      <div className="relative mb-3">
        <Search className="absolute top-3 left-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
        />
      </div>

      {/* Filter Buttons and Dropdowns */}
      <div className="flex flex-wrap items-center gap-3 mt-3">
        {/* Status Filters */}
        {["All", "Active", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setStatus(status)}
            className={`px-4 py-1 rounded-lg text-sm transition ${
              status === status
                ? "bg-gray-600 text-white"
                : "bg-gray-700 text-gray-300 hover:text-white"
            }`}
          >
            {status}
          </button>
        ))}

        {/* Category Filter */}
        <div className="flex items-center gap-1">
          <Filter size={16} />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-700 text-white rounded-lg px-3 py-1 text-sm"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Priority Filter */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="bg-gray-700 text-white rounded-lg px-3 py-1 text-sm"
        >
          {priorities.map((pri) => (
            <option key={pri}>{pri}</option>
          ))}
        </select>

        {/* Sort Options */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-700 text-white rounded-lg px-3 py-1 text-sm"
        >
          {sortOptions.map((sort) => (
            <option key={sort}>{sort}</option>
          ))}
        </select>
      </div>

      <hr className="my-3 border-gray-600" />

      {/* Bottom Status + Toggle */}
      <div className="flex justify-between items-center text-sm text-gray-400">
        <div className="flex items-center gap-3">
          <button onClick={handleToggleAll} className="hover:underline text-gray-300">
          Toggle All
        </button>
        {toggle ? <button onClick={handleUnToggleAll} className="hover:underline text-gray-300 text-red-500">
          Clear Completed  ({completedCount})
        </button>:null}
        </div>
        <span>
          {activeCount} active, {completedCount} completed
        </span>
      </div>
    </div>
  );
};

export default TodoFilter;
