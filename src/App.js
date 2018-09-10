import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from "./components/grid";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <div
          className="jumbotron"
          style={{
            textAlign: "center",
            height: "50px",
            marginBottom: "5px",
            padding: "5px"
          }}
        >
          <h2>TODO List</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-sm-2"
              style={{ float: "left", borderWidth: "2px" }}
            >
              <Nav />
            </div>
            <div className="col-sm-10">
              <Grid />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
