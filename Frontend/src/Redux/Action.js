
// import {
//   ADD_TODO,
//   DELETE_TODO,
//   UPDATE_TODO,
//   FILTER_TODO,
//   UN_TOGGLE_ALL,
//   GET_ALL_TODO,
//   TOGGLE_TODO,
//   TOGGLE_ALL,
//   UN_TOGGLE_TODO
// } from "./ActionType";

// const BASE_URL = "https://localhost:8080/todo"


// export const getAllTodo = () => async (dispatch) => {
//   try {
//       const res = await fetch(`${BASE_URL}/getAll`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const todoList = await res.json();


//   dispatch({ type: GET_ALL_TODO, payload: todoList });

//   } catch (error) {
//     console.log("catch error - ",error)
//   }

// };

// export const addTodo = (data) => async (dispatch) => {

//   try {
//       const res = await fetch(`${BASE_URL}/create`, {
//     method: "POST",

//     headers: {
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify(data.data)
//   });

//   const todo = await res.json();

  

//   dispatch({ type: ADD_TODO, payload: todo });
//   } catch (error) {
//     console.log("error - ",error);
//   }


// };

// export const deleteTodo = (data) => async (dispatch) => {

//   try {
//       const res = await fetch(`${BASE_URL}/delete/${data.todoId}`, {
//     method: "DELETE",

//     headers: {
//       "Content-Type": "application/json",
//     },

    
//   });

//   const todo = await res.json();

  

//   dispatch({ type: DELETE_TODO, payload: todo });
//   } catch (error) {
//     console.log("error - ",error);
//   }


// };

// export const filterTodo = (data) => async (dispatch) => {

//   try {
//       const res = await fetch(`${BASE_URL}/filter`, {
//     method: "POST",

//     headers: {
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify(data.data),
//   });

//   const todo = await res.json();

  

//   dispatch({ type: FILTER_TODO, payload: todo });
//   } catch (error) {
//     console.log("error - ",error);
//   }


// };

// export const updateTodo = (data) => async (dispatch) => {

//   try {
//       const res = await fetch(`${BASE_URL}/update`, {
//     method: "PUT",

//     headers: {
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify(data.data),
//   });

//   const todo = await res.json();

  

//   dispatch({ type: UPDATE_TODO, payload: todo });
//   } catch (error) {
//     console.log("error - ",error);
//   }


// };

// export const toggleAll = () => async (dispatch) => {

//   try {
//       const res = await fetch(`${BASE_URL}/toggleAll`, {
//     method: "GET",

//     headers: {
//       "Content-Type": "application/json",
//     },

   
//   });

//   const todo = await res.json();

  

//   dispatch({ type: TOGGLE_ALL, payload: todo });
//   } catch (error) {
//     console.log("error - ",error);
//   }


// };

// export const unToggleAll = () => async (dispatch) => {

//   try {
//       const res = await fetch(`${BASE_URL}/unToggleAll`, {
//     method: "GET",

//     headers: {
//       "Content-Type": "application/json",
//     },

   
//   });

//   const todo = await res.json();

  

//   dispatch({ type: UN_TOGGLE_ALL, payload: todo });
//   } catch (error) {
//     console.log("error - ",error);
//   }


// };

// export const toggleTodo = (data) => async (dispatch) => {

//   try {
//       const res = await fetch(`${BASE_URL}/toggleTodo/${data.todoId}`, {
//     method: "GET",

//     headers: {
//       "Content-Type": "application/json",
//     },

   
//   });

//   const todo = await res.json();

  

//   dispatch({ type: TOGGLE_TODO, payload: todo });
//   } catch (error) {
//     console.log("error - ",error);
//   }


// };

// export const unToggleTodo = (data) => async (dispatch) => {

//   try {
//       const res = await fetch(`${BASE_URL}/unToggleTodo/${data.todoId}`, {
//     method: "GET",

//     headers: {
//       "Content-Type": "application/json",
//     },

   
//   });

//   const todo = await res.json();

  

//   dispatch({ type: UN_TOGGLE_TODO, payload: todo });
//   } catch (error) {
//     console.log("error - ",error);
//   }


// };


import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  FILTER_TODO,
  UN_TOGGLE_ALL,
  GET_ALL_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL,
  UN_TOGGLE_TODO
} from "./ActionType";

const BASE_URL = "http://localhost:8080/todo"; // HTTPS removed for dev

const headers = {
  "Content-Type": "application/json",
};

export const getAllTodo = () => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/getAll`, { method: "GET", headers });
    const todoList = await res.json();
    dispatch({ type: GET_ALL_TODO, payload: todoList });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/create`, {
      method: "POST",
      headers,
      body: JSON.stringify(todo),
    });
    const updatedTodos = await res.json();
    dispatch({ type: ADD_TODO, payload: updatedTodos });
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

export const deleteTodo = (todoId) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/delete/${todoId}`, {
      method: "DELETE",
      headers,
    });
    const updatedTodos = await res.json();
    dispatch({ type: DELETE_TODO, payload: updatedTodos });
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};

export const updateTodo = (todo) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/update`, {
      method: "PUT",
      headers,
      body: JSON.stringify(todo),
    });
    const updatedTodos = await res.json();
    dispatch({ type: UPDATE_TODO, payload: updatedTodos });
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

export const filterTodo = (filterCriteria) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/filter`, {
      method: "POST",
      headers,
      body: JSON.stringify(filterCriteria),
    });
    const filteredTodos = await res.json();
    dispatch({ type: FILTER_TODO, payload: filteredTodos });
    console.log("Filter todos:", filteredTodos);
  } catch (error) {
    console.error("Error filtering todos:", error);
  }
};

export const toggleAll = () => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/toggleAll`, { method: "GET", headers });
    const updatedTodos = await res.json();
    dispatch({ type: TOGGLE_ALL, payload: updatedTodos });
  } catch (error) {
    console.error("Error toggling all todos:", error);
  }
};

export const unToggleAll = () => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/unToggleAll`, { method: "GET", headers });
    const updatedTodos = await res.json();
    dispatch({ type: UN_TOGGLE_ALL, payload: updatedTodos });
  } catch (error) {
    console.error("Error untoggling all todos:", error);
  }
};

export const toggleTodo = (todoId) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/toggleTodo/${todoId}`, { method: "GET", headers });
    const updatedTodos = await res.json();
    dispatch({ type: TOGGLE_TODO, payload: updatedTodos });
  } catch (error) {
    console.error("Error toggling todo:", error);
  }
};

export const unToggleTodo = (todoId) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/unToggleTodo/${todoId}`, { method: "GET", headers });
    const updatedTodos = await res.json();
    dispatch({ type: UN_TOGGLE_TODO, payload: updatedTodos });
  } catch (error) {
    console.error("Error untoggling todo:", error);
  }
};
