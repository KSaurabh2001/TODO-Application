package com.TODO.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TODO.Model.TodoList;
import com.TODO.Repository.TodoRepository;
import com.TODO.dto.TodoDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TodoServiceImp implements TodoService {

    @Autowired
    private final TodoRepository todoRepository;

    @Override
    public List<TodoList> createTodo(TodoList todo) {
        todo.setCreatedOn(LocalDate.now());
        todoRepository.save(todo);
        
        return getAllTodo();
    }

    @Override
    public List<TodoList> deleteTodo(Long todoId) {
        todoRepository.deleteById(todoId);
        
       return getAllTodo();
    }

    @Override
    public List<TodoList> updateTodo(TodoList todo) {
        Optional<TodoList> existing = todoRepository.findById(todo.getId());
        if (existing.isPresent()) {
            todoRepository.save(todo);
            return getAllTodo();
        }
        throw new RuntimeException("Todo not found with ID: " + todo.getId());
    }

    @Override
    public List<TodoList> getAllTodo() {
        return todoRepository.findAll();
    }

    @Override
    public List<TodoList> filterTodosWithSqlSort(TodoDto request) {
    	TodoList td=new TodoList();
        String searchText = normalize(request.getSearchText());
        String status = normalize(request.getStatus(), "All");
        String category = normalize(request.getCategory(), "All Categories");
        String priority = normalize(request.getPriority(), "All Priorities");

        return switch (request.getSortBy() != null ? request.getSortBy().toUpperCase() : "") {
            case "DUE DATE" -> todoRepository.filterAndSortByDueDate(searchText, status, category, priority);
            case "DATE CREATED" -> todoRepository.filterAndSortByCreatedDate(searchText, status, category, priority);
            case "PRIORITY" -> todoRepository.filterAndSortByPriority(searchText, status, category, priority);
            case "ALPHABETIC" -> todoRepository.filterAndSortByAlphabetic(searchText, status, category, priority);
            default -> todoRepository.filterAndSortByCreatedDate(searchText, status, category, priority);
        };
    }

    private String normalize(String value) {
        return (value != null && !value.trim().isEmpty()) ? value.trim() : null;
    }

    private String normalize(String value, String ignoreValue) {
        return (value != null && !value.trim().equalsIgnoreCase(ignoreValue)) ? value.trim() : null;
    }

	@Override
	public List<TodoList> toggleAllTodo() {
		List<TodoList> list=getAllTodo();
		for(TodoList td : list) {
			
			if(td.getStatus().equalsIgnoreCase("Active")) {
			   td.setStatus("Completed");
			}
			
		}
		return getAllTodo();
	}

	@Override
	public List<TodoList> unToggleAllTodo() {
		// TODO Auto-generated method stub
		List<TodoList> list=getAllTodo();
		for(TodoList td : list) {
			
			if(td.getStatus().equalsIgnoreCase("Completed")) {
			   td.setStatus("Active");
			}
			
		}
		return getAllTodo();
	}

	

	@Override
	public List<TodoList> toggleTodo(Long id) {
		// TODO Auto-generated method stub
		 TodoList todo = findById(id);
	        todo.setStatus("Completed");
	       
	        todoRepository.save(todo);
            return getAllTodo();
	        
	}
	
	
	public TodoList findById(Long id) {
	       
		 return todoRepository.findById(id)
			        .orElseThrow(() -> new RuntimeException("Todo with ID " + id + " not found"));
	   
	}

	@Override
	public List<TodoList> unToggleTodo(Long id) {
		// TODO Auto-generated method stub
		 TodoList todo = findById(id);
	        todo.setStatus("Active");
	       
	        todoRepository.save(todo);
         return getAllTodo();
	        
	}



}