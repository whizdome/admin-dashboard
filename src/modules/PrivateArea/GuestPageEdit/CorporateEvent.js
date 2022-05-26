import React, { useState } from 'react'
import HeroSection from "./components/HeroSection";
import meeting3 from "../../../assets/images/meeting3.jpg";
import EditCard from "./components/EditCard";

const CorporateEvent = () => {
  const [editStatus, setEditStatus] = useState(false);

   const heroContents = {
     title: "Corporate events",
     headerText: "Never miss a corporate event for anything.",
     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
     coverImage: meeting3,
   };
   
    const handleEditCover = (val) => {
      console.log(val, "val log");
      setEditStatus(true);
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
      {editStatus && <EditCard closeEdit={closeEdit} />}
    </div>
  );
}

export default CorporateEvent