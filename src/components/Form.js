import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div style={{ marginBottom: "10px" }}>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(this.input.value);
            if (!this.input.value.trim()) {
            } else {
              this.props.onClick(this.input.value);
              this.input.value = "";
            }
          }}
        >
          <div>
            <div style={{ marginLeft: "auto", width: "100%" }}>
              <span>
                <input
                  style={{ width: "50%", float: "left", height: "30px" }}
                  ref={node => (this.input = node)}
                  type="text"
                  class="form-control"
                  placeholder="Click to add task"
                />
              </span>
              <span>
                <button style={{ width: "25%" }} type="submit">
                  Add Task
                </button>
              </span>
              <span>
                <select
                  style={{ width: "25%", height: "30px" }}
                  ref={node => (this.sortBy = node)}
                  onChange={() => this.props.onChange(this.sortBy.value)}
                >
                  <option value="DEFAULT">SORT BY</option>
                  <option value="PENDING">PENDING</option>
                  <option value="OLDEST">OLDEST</option>
                  <option value="NEWEST">NEWEST</option>
                </select>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
