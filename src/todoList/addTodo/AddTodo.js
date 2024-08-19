import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import './AddTodo.css';
import { addTodo, updateTodo } from "../../store/todo";

function AddTodo({ addTodo, updateTodo, selectedTodo }) {
  const todoInputValue = useRef('');

  useEffect(() => {
    if (selectedTodo) {
      todoInputValue.current.value = selectedTodo.name;
    }
  }, [selectedTodo])

  const addTodoHandler = () => {
    const todo = {
      id: Math.random(),
      name: todoInputValue.current.value
    }
    addTodo(todo);
    clearInputValue();
  }

  const updateTodoHandler = () => {
    const currentTodo =  {id: selectedTodo?.id, name: todoInputValue.current.value}
    updateTodo(currentTodo);
    clearInputValue();
  }

  const clearInputValue = () => {
    todoInputValue.current.value = '';
  }

  return (
    <div>
      <input ref={todoInputValue} type="text" className="todo-input" />
      <button className="edit-btn btn" onClick={addTodoHandler}>Add</button>
      <button className="btn" onClick={updateTodoHandler}>Update</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

