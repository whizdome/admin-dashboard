import "antd/dist/antd.min.css";
import { Modal } from "antd";

import "./Modal.scss";

const CustomModal = ({ closeModal, visible, children, style }) => {
  return (
    <Modal
      wrapClassName="private_modal"
      visible={visible}
      onCancel={() => closeModal()}
      width={style.width}
      bodyStyle={{
        textAlign: "center",
      }}
      footer={null}
      header={null}
      position="relative"
      maskClosable={true}
      style={{ top: "10px" }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
