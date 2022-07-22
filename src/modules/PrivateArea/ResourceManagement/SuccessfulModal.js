import React, { useState } from 'react'
import { Button, Modal } from "antd";
import "./resourceManagement.scss";
import { FaCheck } from "react-icons/fa";


function SuccessfulModal({ title }) {

    return (
      <div className="successContents">
        <div className="checked">
          <FaCheck color="#3EA200" />
        </div>
            <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
          provident ullam officia facilis numquam dolore eaque voluque,
          excepturi magni sed.
        </p>
      </div>
    );
}

export default SuccessfulModal