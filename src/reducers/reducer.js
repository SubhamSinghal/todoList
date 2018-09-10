const initialState = {
  filter: 3,
  sortMethod: "PENDING",
  todos: []
};

function board1(state = initialState, action) {
  console.log("Board value = " + action.board);
  if (action.type == "ADD_TODO" && action.board == 1) {
    return Object.assign({}, state, { todos: boardAdd(state.todos, action) });
  }

  if (action.type == "TOGGLE_TODO" && action.board == 1) {
    return Object.assign({}, state, { todos: toggleTodo(state.todos, action) });
  }

  if (action.type == "FILTER_TODO" && action.board == 1) {
    return Object.assign({}, state, { filter: action.filter });
  }

  if (action.type == "SORT_TODO" && action.board == 1) {
    return Object.assign({}, state, { sortMethod: action.sortMethod });
  }

  return state;
}

function board2(state = initialState, action) {
  if (action.type == "ADD_TODO" && action.board == 2) {
    return Object.assign({}, state, { todos: boardAdd(state.todos, action) });
  }

  if (action.type == "TOGGLE_TODO" && action.board == 2) {
    return Object.assign({}, state, { todos: toggleTodo(state.todos, action) });
  }

  if (action.type == "FILTER_TODO" && action.board == 2) {
    return Object.assign({}, state, { filter: action.filter });
  }

  if (action.type == "SORT_TODO" && action.board == 2) {
    return Object.assign({}, state, { sortMethod: action.sortMethod });
  }

  return state;
}

function toggleTodo(state = [], action) {
  return state.map((todo, id) => {
    if (action.id === todo.id) {
      return Object.assign({}, todo, { completed: !todo.completed });
    }

    return todo;
  });
}
function boardAdd(state = [], action) {
  console.log("insode boadr add");
  for (let i = 0; i < state.length; i++) {
    console.log("Array item = " + state[i]);
  }
  return [
    ...state,
    {
      id: action.id,
      text: action.text,
      completed: false,
      day: action.day,
      month: action.month,
      year: action.year,
      time: action.time
    }
  ];

  return state;
}

export { board1, board2 };
