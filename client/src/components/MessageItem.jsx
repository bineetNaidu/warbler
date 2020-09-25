import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

// STATICS
import defaultImg from "../images/default-profile-image.jpg";

const MessageItem = ({ createdAt, user, text, removeMsg }) => {
  const { username, profileImageUrl } = user;
  return (
    <ul className="list-group-item">
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
        <button className="btn btn-danger" onClick={removeMsg}>
          Delete
        </button>
      </div>
    </ul>
  );
};

export default MessageItem;
