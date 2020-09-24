import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

export const setCurrentUser = (user) => ({ type: SET_CURRENT_USER, user });

export function authUser(type, userData) {
  return (dispatch) => {
    // wrap our thunk in a promise so we can wait for the API call
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem("wrabler-jwtToken", token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve(); // indicate that the API call succeeded
        })
        .catch((err) => {
          dispatch(addError(err));
          reject(); // indicate the API call failed
        });
    });
  };
}
