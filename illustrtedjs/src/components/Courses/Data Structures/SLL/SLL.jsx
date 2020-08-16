import React from 'react';
import useContent from '../../../../hooks/FetchCourseContent';
import Navigation from './Navigation';
import PageRoutes from './Pages/PageRouter';
import './SLL.css';
const SLL = () => {
  const query = useContent();
  console.log('query', query);

  return query.isLoading ? null : query.isError ? (
    query.error.message
  ) : (
    <>
      <h1 className="contentTitle">Singly Linked List</h1>
      <div className="contentContainer">
        <Navigation navList={query} />
        <PageRoutes content={query} />
      </div>
    </>
  );
};

export default SLL;
