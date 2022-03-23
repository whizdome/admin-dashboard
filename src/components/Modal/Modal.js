import "antd/dist/antd.min.css";
import { Modal } from "antd";

import "./Modal.scss";

const CustomModal = ({ closeModal, visible, children, style }) => {
  return (
    <Modal
      visible={visible}
      // onCancel={() => closeModal()}
      width={style.width}
      bodyStyle={{
        textAlign: "center",
      }}
      footer={null}
      header={null}
      position="relative"
      maskClosable={false}
      wrapClassName="public_modal"
      style={{ top: style.top }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
