import React from "react";
import ReactDOM from "react-dom";
import '../styles/Modal.css'

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
};
