import React from "react";
import { TailSpin } from "react-loader-spinner";
import "./index.scss";

const Spinner = ({ visible }) => {
  if (visible) {
    return (
      <div className="loader">
        <TailSpin color="#d90b2c" height={40} width={40} />
      </div>
    );
  }
  return null;
};

export default Spinner;
