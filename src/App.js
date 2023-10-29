import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  const [currentTab, handleTabChange] = useState("About");
  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab == "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab == "Resume") {
      <About />;
    }
    if (currentTab == "Contact") {
      <About />;
    }
  };
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
      <main>{renderTab()}</main>
      <Footer></Footer>
    </>
  );
}

export default App;
