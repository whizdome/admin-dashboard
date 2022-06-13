import React, { useState } from "react";
import PrivateLayout from "../../../../components/Layout/Private/PrivateLayout";
import { useLocation, useHistory, Link } from "react-router-dom";
import ResourceHeader from "../ResourceHeader";
import "./HelpTipsView.scss";
import backIcon from "../../../../assets/images/edit-icon.svg";
import ViewHelpTips from "./ViewHelpTips";
import EditHelpTips from "./EditHelpTips";
import { Button, Modal } from 'antd';

const HelpTipsView = () => {
  const location = useLocation();
  const history = useHistory();
  const issEdit = location.search.split("=")[1];
  
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };

    const handleOk = () => {
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };


  return (
    <PrivateLayout>
      <div className="helpTipsView">
        <div className="head">
          <div>
            <div className="box1">
              <div className="back" onClick={() => history.goBack()}>
                <img src={backIcon} alt="backIcon" />
                <span>Back</span>
              </div>
              <div>
                <img src="" alt="" />
                <div>
                  <h4>Help & FAQ</h4>
                  <p>
                    Help Tips {">"}
                    <span> {issEdit ? "Edit" : "View"} help tip</span>
                  </p>
                </div>
              </div>
            </div>
            {!issEdit && (
              <div className="box2">
                <button>Delete help tip</button>

                <Link to="/resource-management/help-tip/1?edit=true">
                  Edit help tip
                </Link>
              </div>
            )}
          </div>
        </div>
        {issEdit ? <EditHelpTips showModal={showModal} /> : <ViewHelpTips />}
      </div>
      <>
        {/* <Button type="primary" onClick={showModal}>
          Open Modal
        </Button> */}
        <Modal
          width="80%"
          height="100%"
          // title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <ViewHelpTips />
        </Modal>
      </>
    </PrivateLayout>
  );
};
export default HelpTipsView;

