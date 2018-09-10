import React from "react";

const Todo = ({ onClick, completed, text, id }) => {
  return (
    <div>
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "1px",
          padding: "0px",
          marginBottom: "4px",
          borderRadius: "5px"
        }}
      >
        <li
          style={{
            textDecoration: completed ? "line-through" : "none"
          }}
        >
          <div sytle={{ width: "500px" }}>
            <span style={{ marginRight: "2px", width: "200px" }}>{text}</span>
            <span style={{ float: "right" }}>
              <button onClick={() => onClick()} style={{ height: "25px" }}>
                {completed ? "undelete" : "delete"}
              </button>
            </span>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Todo;
