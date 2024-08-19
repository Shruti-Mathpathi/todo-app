import { connect } from "react-redux";
import _map from 'lodash/map';
import './Todos.css';
import { deleteTodo } from "../../store/todo";

function Todos({ todos, deleteTodo, setSelectedTodo }) {

    const todoClickHandler = (todo) => {
        setSelectedTodo(todo)
    }

    const deleteTodoHanlder = (todo) => {
        deleteTodo(todo)
    }

    const renderTodo = (todo) => <li key={todo.id} className={'list-item'}> {todo?.name}
        <button className={'edit-btn btn'} onClick={() => todoClickHandler(todo)}>Edit</button>
        <button className="btn" onClick={() => deleteTodoHanlder(todo)}>Delete</button> </li>

    return (
        <ul>
            {_map(todos, renderTodo)}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (todo) => dispatch(deleteTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

