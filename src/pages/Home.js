import React from "react";
import { Outlet } from "react-router-dom";

import Stats from "../components/Stats";
import "./home.css";

// STUB: page will hold list of repos, home page UI

const Home = ({ userData }) => {
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
          <Stats />
        </article>
      </section>
      <Outlet />
    </>
  );
};

export default Home;
