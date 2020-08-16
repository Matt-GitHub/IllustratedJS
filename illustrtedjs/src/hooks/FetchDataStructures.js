import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
require('dotenv').config();

function useCourse() {
  return useQuery(
    'data structures',
    () => {
      return axios
        .get(
          `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIORNMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
        )
        .then(res => res.data.items[0].fields.dataStructures.DataStructures);
    },
    {
      staleTime: 1000 * 60 * 60 * 24
    }
  );
}

export default useCourse;
