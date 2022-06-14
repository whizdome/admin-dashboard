import React from "react";
import about1 from "../../../../assets/images/about1.jpg";

import { Collapse } from "antd";
// import View from "./View";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const Accord = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const accordionDatas = [
    {
      header: "Nunc dictum lectus sem, vel dignissim.1",
      text: "",
    },
    {
      header: "Nunc dictum lectus sem, vel dignissim.2",
      text: "",
    },
    {
      header: "Nunc dictum lectus sem, vel dignissim.3",
      text: "",
    },
    {
      header: "Nunc dictum lectus sem, vel dignissim.4",
      text: "",
    },
  ];
  return (
    <Collapse defaultActiveKey={["0"]} onChange={onChange}>
      {accordionDatas.map((data, index) => (
        <Panel header={data.header} key={index}>
          <p>{text}</p>
        </Panel>
      ))}
    </Collapse>
  );
};

const View = () => {
  return (
    <div className="">
      <h4>Nunc dictum lectus sem, vel dignissim</h4>
      <div className="img_cover">
        <img style={{width:"100%"}} src={about1} alt="about1" />
      </div>
      <p>
        Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed
        pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id
        massa pulvinar euismod cursus non justo. Sed sagittis et urna non
        efficitur. Nulla nec lacus tincidunt, rutrum arcu in, euismod diam.
        Donec neque tellus, congue sed velit sed, scelerisque scelerisque urna.
        Praesent mi sem, tincidunt eget facilisis in, pharetra et sapien. Proin
        sagittis erat magna, id eleifend ante posuere nec. Suspendisse potenti.
        Suspendisse tincidunt sed tortor at porta. Donec a molestie lectus, ac
        laoreet tellus. Nullam non rutrum velit, in lacinia diam. Nam vulputate
        elit sit amet orci mattis faucibus. Nam auctor eu eros in vehicula.
        Donec non risus id lacus aliquet.
      </p>
      <Accord />
    </div>
  );
};

export default View;
