package com.TODO.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.TODO.Model.TodoList;

public interface TodoRepository extends JpaRepository<TodoList,Long>{
	

    // Sort by dueDate
    @Query("SELECT t FROM TodoList t " +
           "WHERE (:searchText IS NULL OR LOWER(t.title) LIKE LOWER(CONCAT('%', :searchText, '%'))) " +
           "AND (:status IS NULL OR LOWER(t.status) = LOWER(:status)) " +
           "AND (:category IS NULL OR LOWER(t.category) = LOWER(:category)) " +
           "AND (:priority IS NULL OR LOWER(t.priority) = LOWER(:priority)) " +
           "ORDER BY t.dueDate DESC")
    List<TodoList> filterAndSortByDueDate(String searchText, String status, String category, String priority);

    // Sort by createdOn
    @Query("SELECT t FROM TodoList t " +
           "WHERE (:searchText IS NULL OR LOWER(t.title) LIKE LOWER(CONCAT('%', :searchText, '%'))) " +
           "AND (:status IS NULL OR LOWER(t.status) = LOWER(:status)) " +
           "AND (:category IS NULL OR LOWER(t.category) = LOWER(:category)) " +
           "AND (:priority IS NULL OR LOWER(t.priority) = LOWER(:priority)) " +
           "ORDER BY t.createdOn DESC")
    List<TodoList> filterAndSortByCreatedDate(String searchText, String status, String category, String priority);

    // Sort by priority
    @Query("SELECT t FROM TodoList t " +
           "WHERE (:searchText IS NULL OR LOWER(t.title) LIKE LOWER(CONCAT('%', :searchText, '%'))) " +
           "AND (:status IS NULL OR LOWER(t.status) = LOWER(:status)) " +
           "AND (:category IS NULL OR LOWER(t.category) = LOWER(:category)) " +
           "AND (:priority IS NULL OR LOWER(t.priority) = LOWER(:priority)) " +
           "ORDER BY t.priority ASC ")
    List<TodoList> filterAndSortByPriority(String searchText, String status, String category, String priority);

    // Sort alphabetically
    @Query("SELECT t FROM TodoList t " +
           "WHERE (:searchText IS NULL OR LOWER(t.title) LIKE LOWER(CONCAT('%', :searchText, '%'))) " +
           "AND (:status IS NULL OR LOWER(t.status) = LOWER(:status)) " +
           "AND (:category IS NULL OR LOWER(t.category) = LOWER(:category)) " +
           "AND (:priority IS NULL OR LOWER(t.priority) = LOWER(:priority)) " +
           "ORDER BY LOWER(t.title) ASC")
    List<TodoList> filterAndSortByAlphabetic(String searchText, String status, String category, String priority);
}

