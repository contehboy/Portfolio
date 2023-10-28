import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [currentTab, handleTabChange] = useState("about");
  return (
    <>
      <Helmet>
        <title>Ibrahim's Portfolio</title>
      </Helmet>
      ;
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
    </>
  );
}

export default App;
