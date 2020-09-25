import React from "react";

// STATICS
import defaultImg from "../images/default-profile-image.jpg";

const UserInfo = ({ username, profileImageUrl }) => (
  <aside className="col-sm-2">
    <div className="panel panel-default">
      <img
        src={profileImageUrl || defaultImg}
        alt={`${username}'s avatar`}
        height="200"
        width="200"
        className="img-thumbnail"
      />
      <h1>{username}</h1>
    </div>
  </aside>
);

export default UserInfo;
