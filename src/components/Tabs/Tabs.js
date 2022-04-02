import React from "react";
import { Tabs } from "antd";

import "antd/dist/antd.css";
import "./Tabs.scss";

const { TabPane } = Tabs;

const CustomTab = ({ tabs, parentCallback }) => {
  const callback = (key) => {
    // console.log(key);
    parentCallback(key);
  };
  return (
    <Tabs defaultActiveKey="0" onChange={callback}>
      {tabs.map(({ title, content }, i) => (
        <TabPane tab={title} key={i}>
          {content}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default CustomTab;
