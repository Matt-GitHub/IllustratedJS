import React from 'react';
import './AuthButton.css';
import { useAuth0 } from '@auth0/auth0-react';

const Button = ({ text, id }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button id={id} className="button" onClick={loginWithRedirect}>
      {text}
    </button>
  );
};

export default Button;
