// components/GradientButton.js
import React from 'react';

const GradientButton = ({ 
  textSize = 'text-base', // Default text size
  px = 'px-0',           // Default horizontal margin
  py = 'py-0',           // Default vertical margin
  text = 'Button',       // Default text
}) => {
  return (
    <button
      className={`BlueGradient ${textSize} ${px} ${py} text-white font-medium 
                  shadow-[4px_4px_8px_rgba(0,0,0,0.3)] 
                  hover:shadow-[5px_5px_10px_rgba(0,0,0,0.4)] 
                  transition-all duration-200 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default GradientButton;