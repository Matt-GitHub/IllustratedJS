import React from 'react';
import './AuthButton.css';

const LearnButton = ({ text, id }) => {
  return (
    <button id={id} className="button">
      {text}
    </button>
  );
};

export default LearnButton;
