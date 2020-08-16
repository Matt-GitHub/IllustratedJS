import React from 'react';
import useCourse from '../../../hooks/FetchDataStructures';
import { Link } from 'react-router-dom';
import './DataStructures.css';
import DSRoutes from './DataStructureRoutes';
require('dotenv').config();

const DataStructures = () => {
  const data = useCourse();
  return data.isLoading ? null : data.isError ? (
    data.error.message
  ) : (
    <main>
      <h1 className="contentTitle">Data Structures</h1>
      <div className="dsContainer">
        {data.data.map(course => {
          return (
            <div className="dsCourse">
              <Link
                className="courseLink"
                to={`/Content/DataStructures/${course.replace(/\s+/g, '')}`}
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

export default DataStructures;
