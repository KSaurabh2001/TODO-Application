package com.TODO.dto;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoDto {
	
	    private String searchText;        // For searching by title or keywords
	    private String status;            // "ACTIVE", "COMPLETED", or null
	    private String category;          // e.g., "Work", "Personal", or null
	    private String priority;          // "LOW", "MEDIUM", "HIGH", or null
	    private String sortBy;         // "DUE_DATE", "DATE_CREATED", "PRIORITY", "ALPHABETIC"
}
