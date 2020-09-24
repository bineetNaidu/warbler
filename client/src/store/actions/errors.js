const { ADD_ERROR, REMOVE_ERROR } = require("../actionTypes");

export const addError = (error) => ({ type: ADD_ERROR, error });

export const removeError = () => ({ type: REMOVE_ERROR });
