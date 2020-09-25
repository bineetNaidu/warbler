import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

// STATICS
import defaultImg from "../images/default-profile-image.jpg";
import "./MessageItem.css";

const MessageItem = ({ createdAt, user, text, removeMsg, isCorrectUser }) => {
  const { username, profileImageUrl } = user;
  return (
    <ul className="list-group-item mt-2">
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
        <div className="message-displayBox">
          <p>{text}</p>
          {isCorrectUser && (
            <button className="btn btn-danger" onClick={removeMsg}>
              Delete
            </button>
          )}
        </div>
      </div>
    </ul>
  );
};

export default MessageItem;
