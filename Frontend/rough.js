import Header from "./Components/Header";
import React, { use, useState,useEffect ,useSelector} from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoFilter from "./Components/TodoFilters";

function App() {
  const { todo } = useSelector((store) => store);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All Categories");
  const [filterPriority, setFilterPriority] = useState("All Priorities");
  const [sortOrder, setSortOrder] = useState("Date Created");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCount, setActiveCount] = useState(1);
  const [completedCount, setCompletedCount] = useState(0);

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "Buy groceries",
  //     description: "Milk, Bread, Eggs",
  //     priority: "Medium",
  //     category: "Personal",
  //     dueDate: "2025-06-20",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Complete project",
  //     description: "Finish TodoApp UI",
  //     priority: "High",
  //     category: "Work",
  //     dueDate: "2025-06-22",
  //     completed: false,
  //   },
  // ]);
 

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (editedTask) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editedTask.id ? { ...todo, ...editedTask } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleAll = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: !allCompleted }))
    );
  };

  useEffect(() => {
       const totalTasks = todo.todos.length;
      const completedTasks = todo.todos.filter((todo) => todo.completed).length;
      const activeTasks = totalTasks - completedTasks;
      const overdueTasks = todos.filter(
    (todo) => !todo.completed && new Date(todo.dueDate) < new Date()
  ).length;
  }, [todos]);

  const handleAddTask = () => {};
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
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          activeTasks={activeTasks}
          overdueTasks={overdueTasks}
        />

        <div className="mt-6">
          <TodoForm onAdd={handleAddTask} />
        </div>

        <div className="mt-6">
          <TodoFilter
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            filterPriority={filterPriority}
            setFilterPriority={setFilterPriority}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeCount={activeCount}
            completedCount={completedCount}
            toggleAll={toggleAll}
          />
        </div>

        <div className="mt-6">
          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
