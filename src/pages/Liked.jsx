import React from "react";

const Liked = ({ liked }) => {
  return (
    <div>
      {liked.map((l) => {
        return (
          <div className="liked">
            <h1>{l.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Liked;
