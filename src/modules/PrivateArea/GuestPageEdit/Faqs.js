import React from 'react'
import coverVector from "../../../assets/images/cover-vector.svg";

const Faqs = () => {
  return (
    <div className="Faqs">
      <div className="hero">
        <div>
          <h1>Frequently Asked Question</h1>
          <p>
            We have taken our time to answer some of the questions we think
            you'll have
          </p>
          <img className="bg_vector" src={coverVector} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Faqs