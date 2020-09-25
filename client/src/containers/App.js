import React from "react";
import { Provider } from "react-redux";
import { configStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import JwtDecode from "jwt-decode";

function App() {
  // STATES

  // HOOKS && CONTEXT
  const store = configStore();
  if (localStorage.warbler_jwtToken) {
    setAuthorizationToken(localStorage.warbler_jwtToken);
    // prevent some from manually editing the key of jwt in localStorage
    try {
      store.dispatch(setCurrentUser(JwtDecode(localStorage.warbler_jwtToken)));
    } catch (e) {
      store.dispatch(setCurrentUser({}));
    }
  }

  // FUNCTIONS

  return (
    <Provider store={store}>
      <Router>
        <div className="onBoarding">
          <Navbar />
          <Main />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
