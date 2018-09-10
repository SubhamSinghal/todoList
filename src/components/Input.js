import React, { Component } from "react";
import Todo from "./Todo";
import Form from "./Form";
import {
  addTodo,
  toggleTodo,
  sortTodo,
  displayFinished
} from "../actions/action";

class Input extends Component {
  listStyle = {
    listStyleType: "none"
  };
  constructor(props) {
    super(props);
    console.log("Input" + this.boards);
  }

  getTodoList(listItem) {
    if (!listItem) return;
    return listItem.map(item => (
      <Todo
        key={item.id}
        onClick={() => {
          this.props.toggleTodo(item.id, this.props.board);
        }}
        id={item.id}
        completed={item.completed}
        text={item.text}
      />
    ));
  }

  handleOnSelect(sortMethod) {
    this.props.sortTodo(sortMethod, this.props.board);
  }
  render() {
    return (
      <div>
        <div
          style={{
            borderStyle: "solid",
            borderWidth: "1px",
            width: "100%"
          }}
        >
          <div
            style={{ height: "700px", overflowY: "auto", marginRight: "auto" }}
          >
            <h3>{this.props.status}</h3>
            <ol style={this.listStyle}>
              {this.getTodoList(
                this.props.board === 1 ? this.props.board1 : this.props.board2
              )}
            </ol>
          </div>
        </div>

        <Form
          onClick={text => this.props.addTodo(text, this.props.board)}
          onChange={value => this.handleOnSelect(value, this.props.board)}
        />
      </div>
    );
  }
}

export default Input;
