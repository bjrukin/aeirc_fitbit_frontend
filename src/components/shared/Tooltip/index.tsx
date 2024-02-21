import React, { useState } from "react";

interface ToolTipProps {
  content?: any;
  children?: React.ReactNode;
}

const ToolTip: React.FC<ToolTipProps> = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className="absolute top-[-128%] left-[55%] transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded-sm text-xs duration-800 ease-in-out">
          {content}
        </div>
      )}
    </div>
  );
};

export default ToolTip;
