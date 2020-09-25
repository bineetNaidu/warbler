import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMsg } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

// STATICS
import "./MessageList.css";

const MessageList = ({ fetchMessages, messages, removeMsg, currentUser }) => {
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
            <MessageItem
              key={m._id}
              {...m}
              removeMsg={removeMsg.bind(this, m.user._id, m._id)}
              isCorrectUser={currentUser === m.user._id}
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
    currentUser: state.currentUser.user.id,
  };
}

export default connect(mapStateToProps, { fetchMessages, removeMsg })(
  MessageList
);
