import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import TabProvider from "./Context/TabProvider";

ReactDOM.render(
  <Provider store={store}>
    <TabProvider>
      <App />
    </TabProvider>
  </Provider>,
  document.getElementById("root")
);
