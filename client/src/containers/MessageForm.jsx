import React from "react";
import { connect } from "react-redux";
import useFormState from "../customs/useFormState";
import { postNewMessage } from "../store/actions/messages";

const MessageForm = ({ postNewMessage, errors, history }) => {
  // HOOKS && CONTEXTS
  const [message, handleMessage, resetMsg] = useFormState("");

  // FUNCTIONS
  const handleSubmit = (e) => {
    e.preventDefault();
    postNewMessage(message);
    resetMsg();
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {errors.message && <div className="alert alert-danger">{errors}</div>}
        <input
          type="text"
          className="form-control"
          value={message}
          onChange={handleMessage}
        />
        <button className="btn btn-success pull-right" type="submit">
          Add Message
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ errors: state.errors });

export default connect(mapStateToProps, { postNewMessage })(MessageForm);
