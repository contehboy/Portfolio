import React from "react";
import { useEffect } from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <h1>Ibrahim's Portfolio</h1>
          <Nav currentTab={currentTab} handleTabChange={handleTabChange}></Nav>
        </header>
      </section>
    </div>
  );
}

export default Header;
