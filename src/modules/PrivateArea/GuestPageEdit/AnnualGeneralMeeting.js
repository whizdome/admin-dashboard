import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import meeting from "../../../assets/images/meeting.jpg";
import EditCard from "./components/EditCard";
import CardSection from "./components/CardSection";
import meeting1 from "../../../assets/images/meeting1.jpg";

const AnnualGeneralMeeting = () => {
  const [editStatus, setEditStatus] = useState(false);
    const [issHeroSection, setIssHeroSection] = useState(false);
  // const [editCardStatus, setEditCardStatus] = useState(false);

 
  const handleEditCover = (val) => {
    console.log(val, "val log")
    setEditStatus(true)
    setIssHeroSection(true)
  };
  const handleEditCard = (val) => {
    console.log(val, "val log");
     setEditStatus(true);
    setIssHeroSection(false);
  };



  const closeEdit = () => {
   setEditStatus(false);
  }
 const heroContents = {
   title: "Annual General Meetings",
   headerText: "Keep your stakeholders connected and up to date.",
   text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
   coverImage: meeting,
 };
  const cardContent1 = {
    cardImage: meeting1,
    title: "Hybrid AGM",
    bodyText:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
  };
    const cardContent2 = {
      cardImage: meeting1,
      title: "Virtual AGM",
      bodyText:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
    };

     const cardContent3 = {
       cardImage: meeting1,
       title: "Electronic Voting",
       bodyText:
         "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
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
      <CardSection cardContent={cardContent3} handleEditCard={handleEditCard} />

      {editStatus && (
        <EditCard closeEdit={closeEdit} issHeroSection={issHeroSection} />
      )}
    </div>
  );
};

export default AnnualGeneralMeeting;
