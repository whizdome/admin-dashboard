import React from "react";
import { useParams } from "react-router-dom";
import AnnualGeneralMeeting from "./AnnualGeneralMeeting";
import CorporateEvent from "./CorporateEvent";
import Shows from "./Shows";
import PrivacyPolicy from "./PrivacyPolicy";
import Faqs from "./Faqs";
import TermsOfUse from "./TermsOfUse";
import AboutUs from "./AboutUs";
import "./GuestPage.scss";
import GuestPageLayout from "./GuestPageLayout";



const GuestPageEdit = () => {
      const pageName = useParams().pageName;
      const title = pageName.split(" ").join("");

     const CurrentPage = () => {
       switch (title) {
         case "AnnualGeneralMeeting":
           return <AnnualGeneralMeeting />;
           break;
         case "CorporateEvent":
           return <CorporateEvent />;
           break;

         case "AboutUs":
           return <AboutUs />;
           break;
         case "CorporateEvent":
           return <CorporateEvent />;
           break;
         case "PrivacyPolicy":
           return <PrivacyPolicy />;
           break;
         case "Shows":
           return <Shows />;
           break;
         case "FAQs":
           return <Faqs />;
           break;
         case "TermsofUse":
           return <TermsOfUse />;
           break;
         default:
           return (
             <div>
               <h1>Not found</h1>
             </div>
           );
           break;
       }
     };
      return (
        <GuestPageLayout title={pageName}>
          <CurrentPage />
        </GuestPageLayout>
      );
}

export default GuestPageEdit;