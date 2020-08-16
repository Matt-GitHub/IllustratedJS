import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ navList }) => {
  console.log('nav loading', navList);

  return navList.isLoading ? (
    '...Loading'
  ) : navList.isError ? (
    navList.error.message
  ) : (
    <>
      <div className="contentNavigation">
        <ul>
          {navList.data.navigation.navigation.map((nav, id) => {
            return (
              // Replace all whitespace for cleaner links
              <li key={id} className="contentItem">
                <NavLink
                  activeClassName="contentActive"
                  className="contentLink"
                  to={`/Content/DataStructures/LinkedLists/${nav.replace(
                    /\s+/g,
                    ''
                  )}`}
                >
                  {nav}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
