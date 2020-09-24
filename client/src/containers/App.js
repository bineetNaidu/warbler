import React from "react";
import { Provider } from "react-redux";
import { configStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

// STATICS

function App() {
  // STATES

  // HOOKS && CONTEXT
  const store = configStore();

  // FUNCTIONS

  return (
    <Provider store={store}>
      <Router>
        <div className="onBoarding">
          <Navbar />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
