import React, { Component } from "react";
import Input from "../containers/container";

class Grid extends Component {
  constructor(props) {
    super(props);
    console.log("Grid props" + props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <Input board={1} status="Today" />
        </div>
        <div className="col-sm-4">
          <Input board={2} status="Tomorrow" />
        </div>
      </div>
    );
  }
}

export default Grid;
