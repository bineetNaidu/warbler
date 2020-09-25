import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

// STATICS
import "./MessageList.css";

const MessageList = ({ fetchMessages, messages }) => {
  // STATES

  // HOOKS && CONTEXT
  useEffect(() => {
    fetchMessages();
  }, []);

  // FUNCTIONS

  return (
    <div className="row col-sm-8">
      <div className="offset-1 col-sm-10">
        <ul className="list-group messages">
          {messages.map((m) => (
            <MessageItem key={m._id} {...m} />
          ))}
        </ul>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    messages: state.message,
  };
}

export default connect(mapStateToProps, { fetchMessages })(MessageList);
