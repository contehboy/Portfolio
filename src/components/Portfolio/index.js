import React from "react";
import walletwizard from "../../assets/walletwizard.png";
import travelplanner from "../../assets/travelplanner.png";
import texteditor from "../../assets/texteditor.png";
import workout from "../../assets/workoutapp.png";

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
      <div class="project">
        <div class="project-info">
          <div class="project-img">
            <a href="https://still-fortress-13697-122e1b6f4e62.herokuapp.com/">
              {" "}
              <img
                src={workout}
                class="project-img2"
                style={{ width: "100%" }}
                alt="wallet wizard"
              />
            </a>
          </div>
          <div class="project-text">
            <h4>Workout app</h4>
            <p>
              This application can be used to track the progress of you
              workouts. It alows users to create custom workouts with exercises
              and sets. The user can input reps and weights to the sets and log
              the workouts to the database. The progress page shows the data
              from these logged workouts that you can view based on exercise.
              Each set outputs a calculated daily max rep value that can be
              charted over time. This is usefull to view your strength progress
              as you train.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
