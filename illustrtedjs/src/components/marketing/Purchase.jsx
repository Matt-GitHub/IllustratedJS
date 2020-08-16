import React from 'react';
import './Purchase.css';
import Button from '../AuthButton';
import { useAuth0 } from '@auth0/auth0-react';

const Purchase = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <h1 className="planHeader">A Study Plan For Everyone</h1>
      <main className="planContainer">
        <div className="plan">
          <div className="planH">
            <h2 className="planName">Job Prepper</h2>
            <div className="planPrice">
              <span className="planBig">
                <span className="planCurrency">$</span>29
              </span>
              <span>.99/month</span>
            </div>
            <div className="planDescriptionContainer">
              <span>
                You have a big interview coming up or you just want to test the
                waters with Illustrated JS. Our Job Prepper plan is perfect for
                those who don't want a big commitment.
              </span>
              <ul>
                <li className="planList">
                  <span role="img" aria-label="trophy emoji">
                    ⭐
                  </span>{' '}
                  Access to all content
                </li>
              </ul>
            </div>
            <Button text="Get Started" />
          </div>
        </div>
        <div className="plan">
          <h2 className="planName">Commited Studier</h2>
          <div className="planPrice">
            <span className="planBig">
              <span className="planCurrency">$</span>149
            </span>
            <span>.99/year</span>
          </div>

          <div className="planDescriptionContainer">
            <span>
              Your year long computer science adventure begins here. The
              Committed Studier is perfect for those just finishing a coding
              bootcamp and wanting to take a deep dive for interview prep.
            </span>
            <ul>
              <li className="planList">
                <span role="img" aria-label="trophy emoji">
                  ⭐
                </span>{' '}
                Access to all content
              </li>
              <li className="planList">
                <span role="img" aria-label="trophy emoji">
                  ⭐
                </span>{' '}
                Free upgrades to new content
              </li>
              <li className="planList">
                <span role="img" aria-label="trophy emoji">
                  ⭐
                </span>{' '}
                Invite to discord community
              </li>
            </ul>
          </div>
          <Button text="Get Started" />
        </div>
        <div className="plan">
          <h2 className="planName">Lifetime Learner</h2>
          <div className="planPrice">
            <span className="planBig">
              <span className="planCurrency">$</span>300
            </span>
          </div>
          <div className="planDescriptionContainer">
            <span className="planDescription">
              Staying current and practicing your skills is super important as
              you advance throughout your career. Our Lifetime Learners know the
              value of being on top of your game and ready for when the next
              opportunity comes!
            </span>
            <ul>
              <li className="planList">
                <span role="img" aria-label="trophy emoji">
                  ⭐
                </span>{' '}
                Access to all content
              </li>
              <li className="planList">
                <span role="img" aria-label="trophy emoji">
                  ⭐
                </span>{' '}
                Free upgrades to new content
              </li>
              <li className="planList">
                <span role="img" aria-label="trophy emoji">
                  ⭐
                </span>{' '}
                Invite to discord community
              </li>
              <li className="planList">
                <span role="img" aria-label="trophy emoji">
                  ⭐
                </span>{' '}
                Leet Code questions solved
              </li>
            </ul>
          </div>
          <Button text="Get Started" />
        </div>
      </main>
    </>
  );
};

export default Purchase;
