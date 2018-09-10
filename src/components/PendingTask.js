import React, { Component } from "react";

class PendingTask extends Component {
  getTaskList() {
    return (this.props.taskList.map((task, index) =><li key={index}> task.text</li>
    );
  }
  render() {
    return (
      <div>
        <ol>{this.getTaskList()}</ol>
      </div>
    );
  }
}
