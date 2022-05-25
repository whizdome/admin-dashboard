import React from "react";
import HeroSection from "./components/HeroSection";

const Shows = () => {
  const heroContents = {
    title: "Shows",
    headerText: "Keep your stakeholders connected and up to date.",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  };

  return (
    <div>
      <HeroSection heroContents={heroContents} />
    </div>
  );
};

export default Shows;
