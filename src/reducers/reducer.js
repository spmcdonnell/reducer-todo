export const initialState = {
    todos: [
        {
            name: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed };
                    } else {
                        return todo;
                    }
                })
            };
        case 'CLEAR_COMPLETED':
            return { ...state, todos: state.todos.filter(todo => todo.completed === false) };
        default:
            return state;
    }
}

export default reducer;
