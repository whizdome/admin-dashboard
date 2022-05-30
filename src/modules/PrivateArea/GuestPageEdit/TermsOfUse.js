import React, { useState } from "react";
import coverVector from "../../../assets/images/cover-vector.svg";
import EditCard from "./components/EditCard";

const TermsOfUse = () => {

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
  return (
    <div className="termsOfUse">
      <div className="hero">
        <div>
          <h1>Terms of Use</h1>
          <img className="bg_vector" src={coverVector} alt="" />
        </div>
      </div>
      <div className="termsOfUse_body">
        <div className="edit">
          <span onClick={() => handleEditCard("textOnly")}>Edit text</span>
        </div>
        <div className="termsOfUse">
          <h3>IMPORTANT INFORMATION</h3>
          <p>
            This page states the Terms and Conditions under which you may use
            the website www.africaprudential.com (referred to as the Site).
            Please read these Terms and Conditions carefully. If you do not
            accept the Terms and Conditions stated here, do not use the Site.
            Africa Prudential Plc reserves the right to revise the enclosed
            Terms and Conditions on a frequent basis. You as the viewer agree to
            review the Terms and Conditions on a periodical basis. As a repeat
            visitor to the Site, you may consider the Terms and Conditions
            binding to successive visits.
          </p>
          <h3>INFORMATION ON THE SITE</h3>
          <p>
            This Site aims to provide commercial information to clients
            prospective and current. However, personal comments, opinions and
            views expressed on this Site are not necessarily a representation of
            the views of Africa Prudential Plc its directors or its clients.
            Africa Prudential Plc is not responsible for any injury, loss,
            damage or expense incurred by any individual as a result either
            directly or indirectly of any information published on this website.
            In using this site, you acknowledge and agree that the terms set
            forth above are fundamental to the usage of the Site, and that the
            Site would not be provided to you in the absence of such terms.
          </p>
          <h3>USER INTERACTIONS</h3>
          <p>
            Generally, any communication which you transfer to the Site is
            considered to be non-confidential. Africa Prudential Plc will not
            guarantee the privacy or confidentiality of any information relating
            to the user passing over the Internet. DISCLAIMER Africa Prudential
            Plc does not claim the Site will operate free of errors or that the
            Site and its servers are free of possibly harmful elements.
          </p>
          <h3>THIRD PARTY LINKS</h3>
          <p>
            The Site may contain links to third party Web Sites. These links are
            provided solely as a convenience to you. Africa Prudential Plc is
            not responsible for the content of linked third party sites and does
            not make any representations regarding the content or accuracy of
            materials on such third party Web Sites. If you decide to access
            linked third-party Web Sites, you do so at your own risk and in
            accordance with the prevailing terms and conditions and privacy
            policies of third party sites.
          </p>
          <h3>GENERAL</h3>
          <p>
            Any disputes, claims or proceedings arising out of or in any way
            relating to the materials on site shall be governed by the laws of
            the Federal Republic of Nigeria. The Nigerian Courts shall have
            exclusive jurisdiction for the purpose of any proceedings arising
            out of or in any way relating to the materials on site. If any
            provision of this Agreement is found to be invalid by any court
            having competent jurisdiction, the invalidity of such provision
            shall not affect the validity of the remaining provisions of this
            Agreement, which shall remain in full force and effect. No waiver of
            any term of this Agreement shall be deemed a further or continuing
            waiver of such term or any other term. Africa Prudential Plc may at
            any time and without liability modify, suspend or discontinue the
            Site or any materials (or any part or specification thereof), with
            or without notice, for any valid technical, operational or
            commercial reasons. These Terms and Conditions constitute the entire
            agreement between you and Africa Prudential Plc with respect to the
            use of the Site.
          </p>
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

export default TermsOfUse;
