import React, { useState } from "react";
import PrivateLayout from "../../../../components/Layout/Private/PrivateLayout";
import { useLocation, useHistory, Link } from "react-router-dom";
import ResourceHeader from "../ResourceHeader";
import "./HelpTipsView.scss";
import backIcon from "../../../../assets/images/edit-icon.svg";
import ViewHelpTips from "./ViewHelpTips";
import EditHelpTips from "./EditHelpTips";
import { Button, Modal } from "antd";
import View from "./View";
import SuccessfulModal from "../SuccessfulModal";

const HelpTipsView = () => {
  const location = useLocation();
  const history = useHistory();
  const issEdit = location.search.split("=")[1];
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [previewDatas, setPreviewDatas] = useState();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const previewData = (data) => {
    setPreviewDatas(data);
  };
  const showModalSuccess = () => {
    setIsSuccessModal(true);
  };
  const handleOkSuccess = () => {
    setIsSuccessModal(false);
    history.push("/resource-management");
  };

  const handleCancelSuccess = () => {
    setIsSuccessModal(false);
    history.push("/resource-management");
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
        {issEdit ? (
          <EditHelpTips
            showModal={showModal}
            previewData={previewData}
            showModalSuccess={showModalSuccess}
            handleCancelSuccess={handleCancelSuccess}
          />
        ) : (
          <ViewHelpTips />
        )}

        <Modal
          width="70%"
          height="100%"
          style={{ paddingLeft: "210px" }}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="viewHelpTips">
            <View veiwData={previewDatas} />
          </div>
        </Modal>

        <Modal
          width="50%"
          height="50%"
          style={{ paddingTop: "150px", paddingLeft: "200px" }}
          visible={isSuccessModal}
          onOk={handleOkSuccess}
          onCancel={handleCancelSuccess}
        >
          <div className="ViewBlog">
            <SuccessfulModal title="Help Tips Has Been Updated" />
          </div>
        </Modal>
      </div>
    </PrivateLayout>
  );
};
export default HelpTipsView;
