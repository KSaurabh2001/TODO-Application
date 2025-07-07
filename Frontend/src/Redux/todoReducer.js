
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

const initialState = {
  todos: [],
  filterTodos: [],
};

export const todoReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TODO:
      return { ...store, todos: payload };

    case ADD_TODO:
      // If backend returns the full list after adding:
      return { ...store, todos: payload };

      // If backend returns only new todo, use:
      // return { ...store, todos: [...store.todos, payload] };

    case DELETE_TODO:
      return { ...store, todos: payload };

    case UPDATE_TODO:
      return { ...store, todos: payload };

      // If backend returns only the updated todo, use:
      // return {
      //   ...store,
      //   todos: store.todos.map(todo =>
      //     todo.id === payload.id ? payload : todo
      //   )
      // };

    case FILTER_TODO:
      return { ...store, todos: payload };

    case TOGGLE_ALL:
    case UN_TOGGLE_ALL:
    case TOGGLE_TODO:
    case UN_TOGGLE_TODO:
      return { ...store, todos: payload };

    default:
      return store;
  }
};
