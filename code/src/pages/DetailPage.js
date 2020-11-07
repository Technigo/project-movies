import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../urls.js';
import { API_KEY } from '../API_KEY.js';
// eslint-disable-next-line 
import { TvShowDetails } from '../components/TvShowDetails.js';

export const DetailPage = () => {
  // eslint-disable-next-line 
  const [tvShowDetails, setTVShowDetails] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const TVSHOW_URL = `${API_URL}${id}?&api_key=${API_KEY}&language=en-US`;
      fetch(TVSHOW_URL)
        .then(res => res.json())
        .then(tvShowDetails => {   
          console.log(tvShowDetails)
          setTVShowDetails(tvShowDetails);    
        })
        .catch(error => console.error(error));
      }, [id]);
    
      return (
      <main className="detail-page">
        <TvShowDetails {...tvShowDetails} />
      </main>
      );
    };