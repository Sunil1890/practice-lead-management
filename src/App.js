import React from "react";
import "./assets/styles/App.less";

import Cookies from "js-cookie";
import Sidebar from "./common/sidebar/Sidebar";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      {Cookies.get("token") ? (
        <Sidebar />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
