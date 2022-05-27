import React, { useState } from 'react'
import AboutPageHero from './components/AboutPageHero';
import meeting from "../../../assets/images/about11.jpeg";
import CardSection from './components/CardSection';
import meeting1 from "../../../assets/images/meeting1.jpg";

const AboutUs = () => {

    const [editStatus, setEditStatus] = useState(false);
    const [issHeroSection, setIssHeroSection] = useState(false);

    const handleEditCover = (val) => {
      // console.log(val, "val log");
      setEditStatus(true);
      setIssHeroSection(true);
  };
    const handleEditCard = (val) => {
      console.log(val, "val log");
      setEditStatus(true);
      setIssHeroSection(false);
    };


   const heroContents = {
     headerText: "We help you host high quality events",
     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
     coverImage: meeting,
   };
  
       const cardContent3 = {
         cardImage: meeting1,
         title: "Our Mission & Vision",
         bodyText:
           "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
       };


  return (
    <div>
      <AboutPageHero
        heroContents={heroContents}
        handleEditCover={handleEditCover}
      />

      <div className="aboutPageWrapper">
        <div className="section1">
          <h1>About APEMS</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor.
            </p>
            <div className='edit'>
              <p>Edit Text</p>
            </div>
          </div>
        </div>
      </div>

      <CardSection cardContent={cardContent3} handleEditCard={handleEditCard} />
    </div>
  );
}

export default AboutUs