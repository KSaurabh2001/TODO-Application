package com.TODO.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TODO.Model.TodoList;
import com.TODO.Service.TodoService;
import com.TODO.Service.TodoServiceImp;
import com.TODO.dto.TodoDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/todo")
public class TodoController {
	
	
	
	    @Autowired
	    private final TodoService todoService;

	    @PostMapping("/create")
	    public ResponseEntity<List<TodoList>> createTodo(@RequestBody TodoList todo) {
	    	List<TodoList> dataTodo = todoService.createTodo(todo);
	        return new ResponseEntity<>(dataTodo, HttpStatus.CREATED);
	    }

	    @PutMapping("/update")
	    public ResponseEntity<List<TodoList>> updateTodo(@RequestBody TodoList todo) {
	    	List<TodoList> dataTodo = todoService.updateTodo(todo);
	        return new ResponseEntity<>(dataTodo, HttpStatus.OK);
	    }

	    @DeleteMapping("/delete/{id}")
	    public ResponseEntity<List<TodoList>> deleteTodo(@PathVariable Long id) {
	    	List<TodoList> todo= todoService.deleteTodo(id);
	        return new ResponseEntity<>(todo, HttpStatus.OK);
	    }

	    @GetMapping("/getAll")
	    public ResponseEntity<List<TodoList>> getAllTodos() {
	        return new ResponseEntity<>(todoService.getAllTodo(), HttpStatus.OK);
	    }

	    @PostMapping("/filter")
	    public ResponseEntity<List<TodoList>> filterTodos(@RequestBody TodoDto request) {
	        return new ResponseEntity<>(todoService.filterTodosWithSqlSort(request), HttpStatus.OK);
	    }
	    @GetMapping("/toggleAll")
	    public ResponseEntity<List<TodoList>> toggleAllTodos() {
	    	
	    	List<TodoList> todo=todoService.toggleAllTodo();
	        return new ResponseEntity<>(todo, HttpStatus.OK);
	    }
	   
	    @GetMapping("/unToggleAll")
	    public ResponseEntity<List<TodoList>> unToggleAllTodos() {
	    	
	    	List<TodoList> todo=todoService.unToggleAllTodo();
	        return new ResponseEntity<>(todo, HttpStatus.OK);
	    }
	    @GetMapping("/toggleTodo/{id}")
	    public ResponseEntity<List<TodoList>> toggleTodo(@PathVariable Long id) {
	    	List<TodoList> todo= todoService.toggleTodo(id);
	        return new ResponseEntity<>(todo, HttpStatus.OK);
	    }

	    @GetMapping("/unToggleTodo/{id}")
	    public ResponseEntity<List<TodoList>> unToggleTodo(@PathVariable Long id) {
	    	List<TodoList> todo= todoService.unToggleTodo(id);
	        return new ResponseEntity<>(todo, HttpStatus.OK);
	    }
	}


