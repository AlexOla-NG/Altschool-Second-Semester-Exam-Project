import React from "react";
import "./stats.css";

// TODO: stopped here
// style Stats component

const Stats = (props) => {
  return (
    <article className="stats-wrapper">
      <div>
        <p className="number">{props.followers}</p>
        <p>followers</p>
      </div>
      <hr />
      <div>
        <p className="number">{props.following}</p>
        <p>following</p>
      </div>
      <hr />
      <div>
        <p className="number">{props.repositories}</p>
        <p>repositories</p>
      </div>
    </article>
  );
};

export default Stats;

Stats.defaultProps = {
  followers: 4,
  following: 2,
  repositories: 0,
};
