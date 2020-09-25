import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

// STATICS
import defaultImg from "../images/default-profile-image.jpg";

const MessageItem = ({ createdAt, user, text }) => {
  const { username, profileImageUrl } = user;
  return (
    <div>
      <img
        src={profileImageUrl || defaultImg}
        alt={`${username}'s avatar`}
        height="100"
        width="100"
        className="timeline-image"
      />
      <div className="message-area">
        <Link to="/">@{username} &nbsp;</Link>
        <span className="text-muted">
          <Moment className="text-muted" format="Do MMM YYYY">
            {createdAt}
          </Moment>
        </span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MessageItem;
