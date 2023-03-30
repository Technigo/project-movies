/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CREDITS_URL } from '../data/Url';

export const Credits = () => {
    const [ credits, setCredits ] = useState([])
    const { movieId } = useParams()
  
    useEffect(() => {
        fetch(CREDITS_URL(movieId))
          .then((res) => res.json())
          .then((json) => {
            console.log(json)
            setCredits(json.credits)
          })
      }, [movieId])

    return (
        <div className="cast">
              {credits[0].map((credit) => (
            <p key={credit.name}>{credit.name}</p>
              ))}
            </div>
    )
}