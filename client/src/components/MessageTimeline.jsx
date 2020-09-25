import React from "react";
import MessageList from "../containers/MessageList";
import UserInfo from "./UserInfo";

const MessageTimeline = (props) => {
  return (
    <div className="row">
      <UserInfo {...props} />
      <MessageList />
    </div>
  );
};

export default MessageTimeline;
