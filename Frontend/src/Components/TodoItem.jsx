import React from "react";
import { Clock3, Pencil, Trash2 } from "lucide-react";

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "bg-orange-600 text-orange-100";
    case "Medium":
      return "bg-amber-600 text-amber-100";
    case "Low":
      return "bg-green-600 text-green-100";
    default:
      return "bg-gray-600 text-white";
  }
};

const getCategoryColor = (category) => {
  switch (category.toLowerCase()) {
    case "personal":
      return "bg-blue-700 text-blue-100";
    case "work":
      return "bg-indigo-700 text-indigo-100";
    case "health":
      return "bg-pink-700 text-pink-100";
    default:
      return "bg-gray-700 text-white";
  }
};

const TodoItem = ({ task, onToggle, onEdit, onDelete }) => {
  const handleCheckboxChange = () => {
    const newStatus = task.status === "Completed" ? "Active" : "Completed";
    // Call parent handler with task id and new status
    onToggle(task.id, newStatus);
  };

  return (
    <div className="flex justify-between items-start bg-[#1e293b] border border-gray-600 rounded-xl p-4 w-full max-w-5xl mx-auto mb-4 shadow-sm transition-all">
      {/* Left section: Checkbox + Content */}
      <div className="flex gap-3 items-start">
        <input
          type="checkbox"
          checked={task.status === "Completed"}
          onChange={handleCheckboxChange}
          className="mt-1 h-5 w-5 accent-purple-600"
        />
        <div>
          <h3
            className={`text-lg font-semibold ${
              task.status === "Completed"
                ? "line-through text-gray-400"
                : "text-white"
            }`}
          >
            {task.title}
          </h3>
          <p
            className={`text-sm ${
              task.status === "Completed"
                ? "line-through text-gray-500"
                : "text-gray-400"
            }`}
          >
            {task.description}
          </p>
          <div className="flex gap-2 mt-2 text-sm items-center flex-wrap">
            <span
              className={`px-2 py-1 rounded-full flex items-center gap-1 ${getPriorityColor(
                task.priority
              )}`}
            >
              ⏱ {task.priority}
            </span>
            <span
              className={`px-2 py-1 rounded-full flex items-center gap-1 ${getCategoryColor(
                task.category
              )}`}
            >
              🏷 {task.category}
            </span>
            <span className="text-gray-400 flex items-center gap-1">
              <Clock3 size={14} /> {task.dueText}
            </span>
          </div>
        </div>
      </div>

      {/* Right section: icons only if completed */}
      {task.status === "Completed" ? null : (
        <div className="flex gap-3 mt-1">
          <button
            onClick={() => onEdit(task)}
            className="text-gray-300 hover:text-white"
          >
            <Pencil className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
