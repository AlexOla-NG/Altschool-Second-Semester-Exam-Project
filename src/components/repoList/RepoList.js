import React, { useState } from "react";

import RepoCard from "./RepoCard";
import Pagination from "../pagination/Pagination";
import "./repo-list.css";

// TODO: stopped here
// style repolist

const RepoList = ({ repoData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = repoData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <h2>My Repos</h2>
      <div className="repo-card-list">
        {currentPosts.map((repo, index) => {
          return <RepoCard key={index} {...repo} />;
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={repoData.length}
        paginate={paginate}
      />
    </section>
  );
};

export default RepoList;
