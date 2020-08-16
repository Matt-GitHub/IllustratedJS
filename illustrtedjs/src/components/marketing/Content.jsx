import React from 'react';
import './Content.css';
import Courses from '../Courses/Courses';
import CourseRoutes from '../Courses/CourseRoutes';
import DSRoutes from '../Courses/Data Structures/DataStructureRoutes';
const Content = () => {
  return (
    <main>
      <CourseRoutes />
      <DSRoutes />
    </main>
  );
};

export default Content;
