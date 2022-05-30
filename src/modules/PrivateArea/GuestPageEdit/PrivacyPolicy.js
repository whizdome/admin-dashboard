import React, { useState } from "react";
import coverVector from "../../../assets/images/cover-vector.svg";
import EditCard from "./components/EditCard";

const PrivacyPolicy = () => {
  const [editStatus, setEditStatus] = useState(false);
  const [issHeroSection, setIssHeroSection] = useState(false);
  const [issTextOnly, setIssTextOnly] = useState(false);

  const handleEditCard = (val) => {
    if (val === "textOnly") {
      setIssTextOnly(true);
    } else {
      setIssTextOnly(false);
    }
    setEditStatus(true);
    setIssHeroSection(false);
  };
  const closeEdit = () => {
    setEditStatus(false);
    setIssTextOnly(false);
  };
  const policiesTitle = [
    {
      title: "Glossary",
    },
    {
      title: "Privacy Policy",
    },
    {
      title: "Cookies Policy",
    },
    {
      title: "Subject Access Request Response Procedure",
    },
    {
      title: "Contacting Us",
    },
  ];

  return (
    <div className="privacy">
      <div className="hero">
        <div>
          <h1>Privacy & Policy</h1>
          <p>
            We at Africa Prudential treat the privacy of our visitors with the
            highest importance. This policy details the measures we take to
            preserving and safely guarding your privacy when you visit our site
            or communicate with our personnel. The Privacy Policy here has been
            approved and provided by our legal advisors.
          </p>
          <img className="bg_vector" src={coverVector} alt="" />
        </div>
      </div>

      <div className="privacy_body">
        <div className="edit">
          <span onClick={() => handleEditCard("textOnly")}>Edit text</span>
        </div>
        <div>
          <div className="accordion_head">
            <h3>Glossary</h3>
            <p> v </p>
          </div>
          <div className="policies">
            <p>
              Affiliated Third Parties includes companies with which we have
              common ownership or management or other contractual strategic
              support or partnership relationships with, our advisers,
              consultants, bankers, vendors or sub-contractors.
            </p>
            <p>
              Data is information, which is stored electronically, on a
              computer, or in certain paper-based filing systems.
            </p>
            <p>
              Data Controller is a person responsible for determining the manner
              in which Personal Data would be processed.
            </p>
            <p>NDPR means the Nigerian Data Protection Regulations</p>
            <p>
              NITDA means the National Information Technology Development Agency
            </p>
            <p>
              Personal Data is the information relating to an identified or
              identifiable natural person. These include a name, gender, a
              photo, an email address, bank details, medical information,
              computer internet protocol address and any other information
              specific to the physical, physiological, genetic, mental,
              economic, cultural or social identity of that natural person.
            </p>
            Processing is any activity that involves use of Personal Data. It
            includes obtaining, recording or holding the data, or carrying out
            any operation or set of operations on the data including organising,
            amending, recording, retrieving, using, disclosing, erasing or
            destroying it. Processing also includes transferring personal data
            to third parties. Sensitive Personal Data includes information about
            a person’s racial origin, political opinions, religious or similar
            beliefs, trade union membership, physical or mental health or
            condition or sexual life.
          </div>
        </div>
      </div>
      {editStatus && (
        <EditCard
          closeEdit={closeEdit}
          issTextOnly={issTextOnly}
          issHeroSection={issHeroSection}
        />
      )}
    </div>
  );
};

export default PrivacyPolicy;
