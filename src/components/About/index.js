import React from "react";
import { useEffect } from "react";
import profilePicture from "../../assets/profilepicture.jpg";

function About() {
  return (
    <div class="flex-row">
      <h1>About Me</h1>
      <div class="about">
        <div class="profilePicture">
          <img src={profilePicture} alt="profile" style={{ width: "100%" }} />
        </div>
        <p>
          {" "}
          I am a web developer with a vast array of knowleage in many different
          front end and back end languase responsive frameworks, databases, and
          best code practices. My objective Is simply to be the best web
          developer that i can be and to contribute to the technology industry
          all that I know and can do, lam dedicated to perfecting my craft by
          learning from more seasoned developers, remaining humble, and
          continuously makins strides to learn all that I can about development.
          While a student at both Georgia Southern and Georgia State
          Universities, I studied Mathematics, and I believe that my
          understanding of problem solvins and complex algorithms are also
          skills that have and will continue to contribute to my averall success
          as a developer{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
