import React, { Component } from "react";
import {
  addTodo,
  toggleTodo,
  sortTodo,
  displayFinished
} from "../actions/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Nav extends Component {
  handleClick(filter) {
    switch (filter) {
      case "SHOW_ALL":
        this.props.displayFinished(3, 1);
        this.props.displayFinished(3, 2);
        break;
      case "SHOW_PENDING":
        this.props.displayFinished(2, 1);
        this.props.displayFinished(2, 2);
        break;
      case "SHOW_FINISHED":
        this.props.displayFinished(1, 1);
        this.props.displayFinished(1, 2);
        break;
    }
  }
  render() {
    return (
      <div>
        <div
          onClick={() => this.handleClick("SHOW_ALL")}
          style={{ backgroundColor: "lightgrey", textAlign: "center" }}
        >
          <h3>All Tasks</h3>
        </div>
        <div
          onClick={() => this.handleClick("SHOW_PENDING")}
          style={{ backgroundColor: "lightgrey", textAlign: "center" }}
        >
          <h3>Pending</h3>
        </div>
        <div
          onClick={() => this.handleClick("SHOW_FINISHED")}
          style={{ backgroundColor: "lightgrey", textAlign: "center" }}
        >
          <h3>Completed</h3>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    board1: state.board1.todos,
    board2: state.board2.todos
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
)(Nav);
