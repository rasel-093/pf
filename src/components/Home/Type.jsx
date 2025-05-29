import React from "react";
import Typewriter from "typewriter-effect";
const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Well Experience in Kotlin + Jetpack Compose",
          "Flutter Enthusiast",
          "Effective Problem Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
