import React, { useState } from "react";
import PrivateLayout from "../../../../components/Layout/Private/PrivateLayout";
import { useLocation, useHistory, Link } from "react-router-dom";
import ResourceHeader from "../ResourceHeader";
import "./BlogSingle.scss";
import backIcon from "../../../../assets/images/edit-icon.svg";
import ViewBlog from "./ViewBlog";
import EditBlog from "./EditBlog";
import { Button, Modal } from "antd";
import View from "./View";

const BlogSingle = () => {
  const location = useLocation();
  const history = useHistory();
  const issEdit = location.search.split("=")[1];

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

  return (
    <PrivateLayout>
      <div className="blogSingle">
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
                  <h4>Blogs</h4>
                  <p>
                    <span>Blog post</span>
                  </p>
                </div>
              </div>
            </div>
            {!issEdit && (
              <div className="box2">
                <button>Delete Post</button>
                <Link to="/resource-management/blogs/1?edit=true">
                  Edit Post
                </Link>
              </div>
            )}
          </div>
        </div>
        {issEdit ? (
          <EditBlog showModal={showModal} previewData={previewData} />
        ) : (
          <ViewBlog />
        )}

        <Modal
          width="70%"
          height="100%"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="ViewBlog">
            <View veiwData={previewDatas} />
          </div>
        </Modal>
      </div>
    </PrivateLayout>
  );
};
export default BlogSingle;
