let nextTodo = 0;
let today = new Date();

function addTodo(text, board) {
  console.log("DAte = " + today.getDate());
  return {
    type: "ADD_TODO",
    id: nextTodo++,
    text: text,
    board: board
  };
}

function toggleTodo(id, board) {
  return { type: "TOGGLE_TODO", id, board };
}

function sortTodo(sortMethod, board) {
  return { type: "SORT_TODO", sortMethod: sortMethod, board };
}

function displayFinished(filter, board) {
  return { type: "FILTER_TODO", filter, board };
}

export { addTodo, toggleTodo, sortTodo, displayFinished };
