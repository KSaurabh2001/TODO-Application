package com.TODO.Service;

import java.time.LocalDate;
import java.util.List;

import com.TODO.Model.TodoList;
import com.TODO.dto.TodoDto;

public interface TodoService {

	List<TodoList> createTodo(TodoList todo);

    List<TodoList> deleteTodo(Long todoId);

    List<TodoList> updateTodo(TodoList todo);

    List<TodoList> getAllTodo();

    List<TodoList> filterTodosWithSqlSort(TodoDto request);

    List<TodoList> toggleAllTodo();

    List<TodoList> unToggleAllTodo();

	List<TodoList> toggleTodo(Long id);
	
	List<TodoList> unToggleTodo(Long id);
}
