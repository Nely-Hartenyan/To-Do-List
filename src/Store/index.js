import {createStore} from "redux";
import {ToDoListReducer} from "./ToDoListReducer";
import {composeWithDevTools} from "redux-devtools-extension";


export const store=createStore(ToDoListReducer, composeWithDevTools())