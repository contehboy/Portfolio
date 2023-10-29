import React from "react";
import walletwizard from "../../assets/walletwizard.png";
import travelplanner from "../../assets/travelplanner.png";
import texteditor from "../../assets/texteditor.png";

function Portfolio() {
  return (
    <div class="flex-row">
      <h1>Portfolio</h1>

      <div class="project">
        <div class="project-info">
          <div class="project-img">
            <a href="https://github.com/leecstevens/wallet-wizard">
              {" "}
              <img
                src={walletwizard}
                class="project-img2"
                style={{ width: "100%" }}
                alt="wallet wizard"
              />
            </a>
          </div>
          <div class="project-text">
            <h4>Wallet Wizard</h4>
            <p>
              Wallet Wizard is a simple web based app that assists the user by
              inputting their income and expenses and allows them to save and
              modify this data for future use.
            </p>
          </div>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <div class="project-img">
            <a href="https://github.com/Coridane/travelagentapp">
              {" "}
              <img
                src={travelplanner}
                class="project-img2"
                style={{ width: "100%" }}
                alt="travel planner"
              />
            </a>
          </div>
          <div class="project-text">
            <h4>Travel Planner</h4>
            <p>
              A web application for planning your travels and exploring cities.
              It allows users to search for cities and retrieve information
              about hotels, restaurants, attractions, and current weather. Users
              can toggle the display of different types of places, save
              locations for quick access, and view detailed information about
              each place.
            </p>
          </div>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <div class="project-img">
            <a href="https://github.com/contehboy/text-editor">
              {" "}
              <img
                src={texteditor}
                class="project-img2"
                style={{ width: "100%" }}
                alt="wallet wizard"
              />
            </a>
          </div>
          <div class="project-text">
            <h4>Text Editor</h4>
            <p>
              A text editor to save your notes that runs in the browser and also
              function offline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
