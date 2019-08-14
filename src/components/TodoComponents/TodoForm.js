import React, { useState } from 'react';
import uuid from 'uuid';

function TodoForm({ addTodo, clearCompleted }) {
    const [userInput, setUserInput] = useState('');

    function handleInput(e) {
        setUserInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (userInput) {
            addTodo({ name: userInput, id: uuid(), completed: false });

            setUserInput('');
        }
    }

    return (
        <>
            <h2>Add ToDos:</h2>
            <form>
                <input onChange={handleInput} type="text" value={userInput} placeholder="Add a ToDo" />
                <button onClick={handleSubmit}>Add</button>
            </form>
            <button onClick={clearCompleted}>Clear Completed</button>
        </>
    );
}

export default TodoForm;
