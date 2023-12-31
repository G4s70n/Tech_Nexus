import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/store/Store.js";
import App from "./App";
import "./index.css";
//import { HashRouter } from "react-router-dom";
import axios from "axios";

import { BrowserRouter } from "react-router-dom";

//axios.defaults.baseURL = "https://lp9ycn-3001.csb.app/"
axios.defaults.baseURL = "https://tech-nexus.onrender.com"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);