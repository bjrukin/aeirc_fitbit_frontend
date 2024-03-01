import React from "react";

interface ModalProps {
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <>
      <div
        className={
          "fixed top-0 left-0 right-0 bottom-0 z-10 bg-[#000] bg-opacity-50 h-auto"
        }
        //   onClick={onClick}
      />
      <div
        className={`w-[80%] h-[694px]  max-h-[694px] overflow-y-auto fixed top-1/2  z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 rounded-xl bg-tertiary-300  text-[black] `}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
