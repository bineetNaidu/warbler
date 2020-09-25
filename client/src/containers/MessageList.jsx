import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMsg } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

// STATICS
import "./MessageList.css";

const MessageList = ({ fetchMessages, messages, removeMsg }) => {
  // STATES

  // HOOKS && CONTEXT
  useEffect(() => {
    fetchMessages();
  }, [messages]);

  // FUNCTIONS

  return (
    <div className="row col-sm-8">
      <div className="offset-1 col-sm-10">
        <ul className="list-group messages">
          {messages.map((m) => (
            <MessageItem
              key={m._id}
              {...m}
              removeMsg={removeMsg.bind(this, m.user._id, m._id)}
            />
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

export default connect(mapStateToProps, { fetchMessages, removeMsg })(
  MessageList
);
