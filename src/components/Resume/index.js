import React from "react";
import { useEffect } from "react";
import resume from "../../assets/Resume.pdf";

function Resume() {
  return (
    <div class="flex-row">
      <h1>Resume</h1>
      <div class="flex-row">
        <div class="download">
          <a href={resume} download>
            Download my resume
          </a>
        </div>
      </div>
      <div class="resume">
        <div class="list">
          <p class="colum-title">Front-end Profiencies</p>
          <p class="column-text">
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>React.js</li>
            </ul>
          </p>
        </div>
        <div class="list">
          <p class="colum-title">Back-end Profiencies</p>
          <p class="column-text">
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySql</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
