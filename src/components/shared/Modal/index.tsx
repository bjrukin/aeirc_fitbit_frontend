import React, { useEffect } from "react";

interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <>
      <div
        className={
          "fixed top-0 left-0 right-0 bottom-0 z-10 bg-[#000] bg-opacity-50 h-auto"
        }
        // onClick={onClick}
      />
      <div
        className={`w-[80%]  fixed top-1/2  z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-0 xl:p-3 rounded-xl bg-tertiary-300  text-[black]`}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
