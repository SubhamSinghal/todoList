import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
<script src="https://www.gstatic.com/firebasejs/5.4.2/firebase.js" />;

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
