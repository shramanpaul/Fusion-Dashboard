import React from "react";

const NavigationButtons = ({ buttons }) => {
  return (
    <div className="flex space-x-4">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default NavigationButtons;
