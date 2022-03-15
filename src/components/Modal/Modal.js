import "antd/dist/antd.min.css";
import { Modal } from "antd";

import "./Modal.scss";

const CustomModal = ({ closeModal, visible, children }) => {
  return (
    <Modal
      visible={visible}
      // onCancel={() => closeModal()}
      width={"80%"}
      bodyStyle={{
        textAlign: "center",
      }}
      footer={null}
      header={null}
      position="relative"
      maskClosable={false}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
