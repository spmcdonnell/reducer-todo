import React from 'react';

import Todo from './Todo';

function TodoList({ todos, toggleCompleted }) {
    const allTodos = todos.map(todo => <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />);

    return (
        <div>
            <h2>ToDos:</h2>
            {allTodos}
        </div>
    );
}

export default TodoList;
