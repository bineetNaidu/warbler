import React from "react";
import { Provider } from "react-redux";
import { configStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

// STATICS

function App() {
  // STATES

  // HOOKS && CONTEXT
  const store = configStore();

  // FUNCTIONS

  return (
    <Provider store={store}>
      <Router>
        <div>Hello Warbler....</div>
      </Router>
    </Provider>
  );
}

export default App;
