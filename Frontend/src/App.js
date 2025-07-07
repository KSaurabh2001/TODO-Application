import Header from "./Components/Header";
import React, { use, useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoFilter from "./Components/TodoFilters";
import EditTodoModal from "./Components/EditTodoModal";

import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
  unToggleTodo,
  toggleAll,
  getAllTodo,
  unToggleAll,
  filterTodo,
} from "./Redux/Action";

function App() {
  const dispatch = useDispatch();

  const [activeCount, setActiveCount] = useState(1);
  const [completedCount, setCompletedCount] = useState(0);
  const todos = useSelector((state) => state.todo.todos);
  const [editTask, setEditTask] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    activeTasks: 0,
    overdueTasks: 0,
  });

  const handleAddTask = (task) => {
    dispatch(addTodo(task));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setShowEditModal(true);
  };
  const handleEditSubmit = (updatedTask) => {
    dispatch(updateTodo(updatedTask));
    setShowEditModal(false);
    setEditTask(null);
  };

  const handleToggleStatus = (id, newStatus) => {
    if (newStatus === "Completed") {
      dispatch(toggleTodo(id));
    } else {
      dispatch(unToggleTodo(id));
    }
  };

  const handleToggleAll = () => {
    dispatch(toggleAll());
  };
  const handleUnToggleAll = () => {
    dispatch(unToggleAll());
  };

  const filterTodo1 = (filterCriteria) => {
    dispatch(filterTodo(filterCriteria));
    console.log("Filter applied:");
  };

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);

  useEffect(() => {
    console.log("Todos changed:", todos);
    console.log("Calculating stats...");
    const total = todos.length;
    const completed = todos.filter(
      (todo) => todo.status === "Completed"
    ).length;
    const active = total - completed;
    const overdue = todos.filter(
      (todo) =>
        todo.status !== "Completed" && new Date(todo.dueDate) < new Date()
    ).length;
    setActiveCount(active);
    setCompletedCount(completed);

    setStats({
      totalTasks: total,
      completedTasks: completed,
      activeTasks: active,
      overdueTasks: overdue,
    });
  }, [todos]);

  return (
    <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300 px-4 py-6 relative overflow-x-hidden">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-10 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1470&q=80')",
        }}
      ></div>

      {/* Content layer */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <Header
          totalTasks={stats.totalTasks}
          completedTasks={stats.completedTasks}
          activeTasks={stats.activeTasks}
          overdueTasks={stats.overdueTasks}
        />

        <div className="mt-6">
          <TodoForm onAdd={handleAddTask} />
        </div>

        <div className="mt-6">
          <TodoFilter
            activeCount={activeCount}
            completedCount={completedCount}
            filterTodo={filterTodo1}
          />
        </div>

        <div className="mt-6">
          <TodoList
            todos={todos}
            onToggle={handleToggleStatus}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
        {showEditModal && (
          <>
            {/* Overlay to darken background */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"></div>

            {/* Modal itself */}
            <EditTodoModal
              task={editTask}
              onClose={() => setShowEditModal(false)}
              onSubmit={handleEditSubmit}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
