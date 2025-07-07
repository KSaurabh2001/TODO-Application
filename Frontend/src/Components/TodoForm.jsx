import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Personal");
  const [dueDate, setDueDate] = useState("");
  const [showOptions, setShowOptions] = useState(true);
  const [status, setStatus] = useState("Active");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onAdd({
      title,
      description,
      priority,
      category,
      dueDate,
      status,
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setCategory("Personal");
    setDueDate("");
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 dark:bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-5xl mx-auto "
      >
        <div className="flex flex-col md:flex-row items-start gap-4">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg"
          >
            + Add Task
          </button>
        </div>

        <button
          type="button"
          className="text-sm mt-2 text-gray-400 hover:underline"
          onClick={() => setShowOptions(!showOptions)}
        >
          {showOptions ? "Hide Options" : "Show Options"}
        </button>

        {showOptions && (
          <>
            <hr className="my-4 border-gray-600" />
            <textarea
              rows="2"
              placeholder="Add a description (optional)"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 mb-4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Priority */}
              <div>
                <label className="text-sm text-gray-400 mb-1 block">
                  <i className="mr-1">ⓘ</i> Priority
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="text-sm text-gray-400 mb-1 block">
                  🏷️ Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg"
                >
                  <option>Personal</option>
                  <option>Work</option>
                  <option>Shopping</option>
                  <option>Health</option>
                  <option>Learning</option>
                </select>
              </div>

              {/* Due Date */}
              <div>
                <label className="text-sm text-gray-400 mb-1 block">
                  📅 Due Date
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg"
                />
              </div>
            </div>

            {/* Tag-style Preview */}
            <div className="mt-4 flex gap-3">
              <span
                className={`px-3 py-1 text-sm rounded-full font-medium ${
                  priority === "Low"
                    ? "bg-green-600"
                    : priority === "High"
                    ? "bg-red-600"
                    : "bg-yellow-600"
                } text-white`}
              >
                {priority} Priority
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-600 text-white font-medium">
                {category}
              </span>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
// import React from "react";

// const TodoForm = () => {
//   return (
//     <div className="p-6 bg-gray-800 text-white rounded-lg shadow">
//       <input
//         type="text"
//         placeholder="What needs to be done?"
//         className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
//       />
//       <p className="mt-4 text-sm">Hide Options</p>
//       <textarea
//         className="w-full mt-2 p-3 bg-gray-700 text-white rounded"
//         placeholder="Add a description (optional)"
//       ></textarea>
//       <div className="flex flex-wrap gap-4 mt-4">
//         <div>
//           <label className="block text-sm mb-1">Priority</label>
//           <select className="bg-gray-700 text-white p-2 rounded">
//             <option>Medium</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm mb-1">Category</label>
//           <select className="bg-gray-700 text-white p-2 rounded">
//             <option>Personal</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm mb-1">Due Date</label>
//           <input type="date" className="bg-gray-700 text-white p-2 rounded" />
//         </div>
//       </div>
//       <div className="mt-4 flex gap-2">
//         <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Medium Priority</span>
//         <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Personal</span>
//       </div>
//       <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded text-white float-right">
//         + Add Task
//       </button>
//     </div>
//   );
// };

// export default TodoForm;
