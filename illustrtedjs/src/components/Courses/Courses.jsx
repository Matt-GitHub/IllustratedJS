import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Course.css';

const courseSelection = [
  'Data Structures',
  'Algorithms',
  'Advanced JavaScript'
];

const Courses = () => {
  return (
    <main>
      <h1 className="contentTitle">Available Courses</h1>
      <div className="courseContainer">
        {courseSelection.map(course => {
          return (
            <div className="course">
              <Link
                className="courseLink"
                to={`/Content/${course.replace(/\s+/g, '')}`}
              >
                <img
                  src="https://images.idgesg.net/images/article/2020/03/jw_pt3_data_structure_algorithms_java_coding_programmer_2400x1600_davidgoh_akindo_gettyimages_531237630_473456596-100834801-large.jpg"
                  alt="react logo"
                />
                <h2>{course}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Courses;
