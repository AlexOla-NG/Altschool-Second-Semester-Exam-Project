import React from "react";

import { randomHsl } from "../../helpers";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as GitForked } from "../../assets/icons/git-forked.svg";

const RepoCard = (props) => {
  return (
    <article className="repo-card">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div>
        <span className="repo-card-meta">
          <span style={{ color: randomHsl() }}>●</span>
          <span>{props.language}</span>
        </span>
        <span className="repo-card-meta">
          <span>
            <Star style={{ fill: "gray" }} />
          </span>
          <span>{props.stargazers_count}</span>
        </span>
        <span className="repo-card-meta">
          <span>
            <GitForked style={{ fill: "gray" }} />
          </span>
          <span>{props.forks}</span>
        </span>
      </div>
    </article>
  );
};

export default RepoCard;

RepoCard.defaultProps = {
  name: "Alex-Ola-NG",
  description: "Config files for my GitHub profile.",
  language: "CSS",
  stargazers_count: 6,
  forks: 9,
};
