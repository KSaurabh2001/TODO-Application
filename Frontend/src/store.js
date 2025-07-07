import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {thunk} from "redux-thunk";
import { todoReducer } from "./Redux/todoReducer";


const rootReducers=combineReducers({
   todo:todoReducer
});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));