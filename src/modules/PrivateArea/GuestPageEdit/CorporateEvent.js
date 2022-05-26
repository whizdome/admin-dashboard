import React, { useState } from 'react'
import HeroSection from "./components/HeroSection";
import meeting3 from "../../../assets/images/meeting3.jpg";
import EditCard from "./components/EditCard";
import CardSection from "./components/CardSection";
import meeting1 from "../../../assets/images/event.jpg";

const CorporateEvent = () => {
  const [editStatus, setEditStatus] = useState(false);
    const [issHeroSection, setIssHeroSection] = useState(false);

   const heroContents = {
     title: "Corporate events",
     headerText: "Never miss a corporate event for anything.",
     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
     coverImage: meeting3,
   };
   
  
   const cardContent1 = {
     cardImage: meeting1,
     title: "Physical Events",
     bodyText:
       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
   };
   const cardContent2 = {
     cardImage: meeting1,
     title: "Virtual Events",
     bodyText:
       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
   };


    const handleEditCover = (val) => {
      setIssHeroSection(true);
      setEditStatus(true);
  };
    const handleEditCard = (val) => {
      console.log(val, "val log");
      setEditStatus(true);
      setIssHeroSection(false);
    };


    const closeEdit = () => {
      setEditStatus(false);
    };


  return (
    <div>
      <HeroSection
        heroContents={heroContents}
        handleEditCover={handleEditCover}
      />
      <CardSection cardContent={cardContent1} handleEditCard={handleEditCard} />
      <CardSection
        cardContent={cardContent2}
        reverse={true}
        handleEditCard={handleEditCard}
      />

      {editStatus && (
        <EditCard closeEdit={closeEdit} issHeroSection={issHeroSection} />
      )}
    </div>
  );
}

export default CorporateEvent