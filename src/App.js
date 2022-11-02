import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SingleRepo from "./pages/SingleRepo";
import Error from "./pages/Error";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    const response = await fetch("https://api.github.com/users/AlexOla-NG");
    const data = await response.json();
    setUserData(data);
    console.log(userData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home userData={userData} />}>
          <Route path="/repo/:id" element={<SingleRepo />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
