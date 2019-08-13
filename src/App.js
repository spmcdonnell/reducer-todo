import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/reducer';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function addTodo(todo) {
        dispatch({ type: 'ADD', payload: todo });
    }

    function toggleCompleted(id) {
        dispatch({ type: 'TOGGLE_COMPLETED', payload: id });
    }

    function clearCompleted() {
        dispatch({ type: 'CLEAR_COMPLETED' });
    }

    return (
        <div>
            <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
            <TodoList todos={state.todos} toggleCompleted={toggleCompleted} />
        </div>
    );
}

export default App;
