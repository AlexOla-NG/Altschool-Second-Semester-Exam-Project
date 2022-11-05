import React from "react";

import RepoCard from "./RepoCard";
import "./repo-list.css";

// TODO: stopped here
// style repolist

const RepoList = ({ repoData }) => {
  return (
    <section>
      <h2>My Repos</h2>
      <div className="repo-card-list">
        {repoData.map((repo, index) => {
          return <RepoCard key={index} {...repo} />;
        })}
      </div>
    </section>
  );
};

export default RepoList;
