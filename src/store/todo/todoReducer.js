
import {map, filter} from 'lodash';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actionTypes';

const initialState = {
    todos: [],
}

const todoReducer = (state = initialState, action) => {
  
     switch(action.type) {
        case ADD_TODO: 
        return {todos: [...state.todos, action.payload]} 

        case UPDATE_TODO: {
                const updatedTodos  = map(state.todos, (todo) => {
                   if(todo.id === action.payload.id){
                       return action.payload;
                   }
                   return todo;
                })
             return  {todos: updatedTodos} ;
        }

        case DELETE_TODO: {
         const filteredTodos = filter(state.todos, (todo) => todo.id !== action.payload.id);
         return  {todos: filteredTodos} ;
    }

        default:
          return state;
     }
}

export default todoReducer;