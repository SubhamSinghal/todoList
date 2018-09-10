import {
  addTodo,
  toggleTodo,
  sortTodo,
  displayFinished
} from "../actions/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Input from "../components/Input";
import Grid from "../components/grid";

function filterTodo(todos, filter) {
  console.log(16, filter, todos);
  switch (filter) {
    case 3:
      return todos;
    case 2:
      return todos.filter(t => !t.completed);
    case 1:
      return todos.filter(t => t.completed);
  }
}

function sortPending(todos) {
  let newArr = todos.slice();
  return newArr.sort((a, b) => {
    if (a.completed && b && !b.completed) {
      return 1;
    } else if (!a.completed && b && b.completed) {
      return -1;
    }

    return 0;
  });
}

function sortNewest(todos) {
  let newArr = todos.slice();
  console.log("Inside sort newest");
  return newArr.reverse();
}

function sortOldest(todos) {
  let newArr = todos.slice();

  return newArr;
}

function sortTodosList(todos, sortFilter) {
  console.log("Sort todo list in input");
  switch (sortFilter) {
    case "PENDING":
      return sortPending(todos);
    case "NEWEST":
      return sortNewest(todos);
    case "OLDEST":
      return sortOldest(todos);
    default:
      return todos;
  }
}

function mapStateToProps(state) {
  //console.log(state);
  return {
    board1: sortTodosList(
      filterTodo(state.board1.todos.filter(t => t != ""), state.board1.filter),
      state.board1.sortMethod
    ),
    board2: sortTodosList(
      filterTodo(state.board2.todos.filter(t => t != ""), state.board2.filter),
      state.board2.sortMethod
    )
  };
}
function matchDispathToProps(dispatch) {
  return bindActionCreators(
    { addTodo: addTodo, toggleTodo, sortTodo, displayFinished },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispathToProps
)(Input);
