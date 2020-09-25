import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

const MessageList = ({ fetchMessages, messages }) => {
  // STATES

  // HOOKS && CONTEXT
  useEffect(() => {
    fetchMessages();
  }, []);

  // FUNCTIONS

  return (
    <div>
      {messages.map((m) => (
        <MessageItem key={m._id} {...m} />
      ))}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    messages: state.message,
  };
}

export default connect(mapStateToProps, { fetchMessages })(MessageList);
