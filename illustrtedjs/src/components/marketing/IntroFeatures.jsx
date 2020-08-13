import React from 'react';
import Check from '../../assets/icons8-checkmark-32.png';

const IntroFeatures = () => {
  return (
    <div className="introTextContainer">
      <ul className="introTextList">
        <div className="intro1">
          <div className="introCheckoutContentContainer">
            <img src={Check} alt="blue check mark icon" />
            <li className="introCheckoutContent">Video Explanations</li>
          </div>
          <div className="introCheckoutContentContainer">
            <img src={Check} alt="blue check mark icon" />
            <li className="introCheckoutContent">Illustrative Examples</li>
          </div>
          <div className="introCheckoutContentContainer">
            <img src={Check} alt="blue check mark icon" />
            <li className="introCheckoutContent">In-depth Guides</li>
          </div>
        </div>
        <div className="intro2">
          <div className="introCheckoutContentContainer">
            <img src={Check} alt="blue check mark icon" />
            <li className="introCheckoutContent">Documented Code</li>
          </div>
          <div className="introCheckoutContentContainer">
            <img src={Check} alt="blue check mark icon" />
            <li className="introCheckoutContent">100+ Problems</li>
          </div>
          <div className="introCheckoutContentContainer">
            <img src={Check} alt="blue check mark icon" />
            <li className="introCheckoutContent">Discord Community</li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default IntroFeatures;
