import React from "react";
import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

function Footer(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <footer>
        <p>
          <ul>
            <a href="https://github.com/contehboy">
              <li className="footerLogo">
                <AiFillGithub />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/ibrahim-conteh-2640b51ba">
              <li className="footerLogo">
                <AiFillLinkedin />
              </li>
            </a>
            <a href="">
              <li className="footerLogo">
                <BsStackOverflow />
              </li>
            </a>
          </ul>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
