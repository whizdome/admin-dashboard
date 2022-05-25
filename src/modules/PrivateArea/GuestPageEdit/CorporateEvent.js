import React from 'react'
import HeroSection from "./components/HeroSection";

const CorporateEvent = () => {

   const heroContents = {
     title: "Corporate events",
     headerText: "Never miss a corporate event for anything.",
     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
   };
   
  return (
    <div>
      <HeroSection heroContents={heroContents} />
    </div>
  );
}

export default CorporateEvent