import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SingleRepo from "./pages/SingleRepo";
import Error from "./pages/Error";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [repoData, setRepoData] = useState([]);

  const getUserData = async () => {
    const response = await fetch("https://api.github.com/users/AlexOla-NG");
    const data = await response.json();
    setUserData(data);
    console.log(userData);
  };

  const getRepoData = async () => {
    const response = await fetch(
      "https://api.github.com/users/AlexOla-NG/repos"
    );
    const data = await response.json();
    setRepoData(data);
    console.log(repoData);
  };

  useEffect(() => {
    getUserData();
    getRepoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home userData={userData} repoData={repoData} />}
        >
          <Route path="/repo/:id" element={<SingleRepo />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
