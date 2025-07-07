

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onEdit, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="bg-gray-800 text-center p-10 rounded-lg text-gray-400">
        <div className="text-4xl mb-2">✅</div>
        <h2 className="text-xl font-semibold">No tasks found</h2>
        <p className="text-sm mt-1">Create your first task or adjust your filters to see tasks here.</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {todos.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
          
        />
      ))}
    </div>
  );
};

export default TodoList;
