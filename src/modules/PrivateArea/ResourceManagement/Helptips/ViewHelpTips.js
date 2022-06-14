import React from "react";
import { Collapse } from "antd";
import View from "./View";

const helpTipData = {
  title: "Nunc dictum lectus sem, vel dignissim",
  cover_img: "about1",
  text:"Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. Sed sagittis et urna non efficitur. Nulla nec lacus tincidunt, rutrum arcu in, euismod diam. Donec neque tellus, congue sed velit sed, scelerisque scelerisque urna. Praesent mi sem, tincidunt eget facilisis in, pharetra et sapien. Proin sagittis erat magna, id eleifend ante posuere nec. Suspendisse potenti. Suspendisse tincidunt sed tortor at porta. Donec a molestie lectus, ac laoreet tellus. Nullam non rutrum velit, in lacinia diam. Nam vulputate elit sit amet orci mattis faucibus. Nam auctor eu eros in vehicula. Donec non risus id lacus aliquet."
};

const ViewHelpTips = () => {
  return (
    <div className="viewHelpTips">
      <View veiwData={helpTipData} />
    </div>
  );
};

export default ViewHelpTips;
