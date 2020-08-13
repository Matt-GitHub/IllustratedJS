import React from 'react';
import './WhyIJS.css';
import Intro from './Intro';
import IntroFeatures from './IntroFeatures';
import AuthButton from '../AuthButton';
import LearnButton from '../LearnButton';

const WhyIJS = () => {
  return (
    <main>
      <div className="introContainer">
        <Intro />
        <IntroFeatures />
        <div className="introButtons">
          <AuthButton text="Purchase Now" id="introPurchase" />
          <LearnButton text="Learn More" id="introLearn" />
        </div>
      </div>
    </main>
  );
};

export default WhyIJS;

{
  /* <div id="introMediaID" className="introMedia">
  <div className="media">
    <h3 className="mediaTitle">Video Explanations</h3>
    <p className="mediaDescription">
      Short, high value videos that walk you through every step of
      solving a problem. Our content is designed to support our written
      guides, emphasize key decision points and get you coding.
    </p>
  </div>
  <div className="media">
    <h3 className="mediaTitle">Illustrations</h3>
    <p className="mediaDescription">
      Coding is hard, visualizing abstract concepts is even harder.
      Illustrations help reinforce our content by giving you context and
      allowing you to feel like you can see the code.
    </p>
  </div>
  <div className="media">
    <h3 className="mediaTitle">In-depth Guides</h3>
    <p className="mediaDescription">
      Our guides focus on teaching you how to create a framework for
      solving problems. All content follows a process of breaking down a
      concept and creating a step by step plan to understand the
      objective.
    </p>
  </div>
  <div className="media">
    <h3 className="mediaTitle">Documented Code</h3>
    <p className="mediaDescription">
      Reading undocumented code is one of the most frustrating things
      when trying to understand how someone solved a problem. Our code
      snippets are thorough and provide details that make it easy to
      solve a bug in your own code.
    </p>
  </div>
</div> */
}
