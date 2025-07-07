

import React, { useState, useEffect } from "react";

const EditTodoModal = ({ task, onClose, onSubmit }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  useEffect(() => {
    setEditedTask({ ...task });
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedTask);
    onClose(); // Close modal after submit
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Modal container */}
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-2xl shadow-2xl p-8 w-full max-w-xl transform transition-all duration-300 scale-100 border border-gray-300 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Task</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={editedTask.title}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={editedTask.description}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block font-semibold mb-1">Status</label>
            <select
              name="status"
              value={editedTask.status}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
            >
              <option>Active</option>
              <option>Completed</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block font-semibold mb-1">Priority</label>
            <select
              name="priority"
              value={editedTask.priority}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label className="block font-semibold mb-1">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={editedTask.dueDate}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border dark:border-gray-500 border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTodoModal;

