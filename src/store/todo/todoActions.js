import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes"

export const addTodo = (todo) => {
       return {type: ADD_TODO, payload: todo}
}

export const updateTodo = (todo) => {
    return {type: UPDATE_TODO, payload: todo}
}

export const deleteTodo = (todo) => {
    return { type: DELETE_TODO, payload: todo }
}

