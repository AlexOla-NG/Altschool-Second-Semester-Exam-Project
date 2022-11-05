import React from "react";
import { Outlet } from "react-router-dom";

import Stats from "../components/stats/Stats";
import RepoList from "../components/repoList/RepoList";
import "./home.css";

// STUB: page will hold list of repos, home page UI
// store fetched data in localStorage, helps manage network downtime

const Home = ({ userData, repoData }) => {
  const { avatar_url, name, login, bio, public_repos, followers, following } =
    userData;
  return (
    <>
      <section>
        <article className="user-profile">
          <img src={avatar_url} alt="github profile" />
          <div className="user-name">
            <h1>{name}</h1>
            <p>@{login}</p>
            <p className="bio">{bio}</p>
          </div>
          <hr />
          <Stats
            followers={followers}
            following={following}
            repositories={public_repos}
          />
        </article>
      </section>
      <RepoList repoData={repoData} />
      <Outlet />
    </>
  );
};

export default Home;
