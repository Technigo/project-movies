/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CREDITS_URL } from '../data/Url';

export const Credits = () => {
    const [ credits, setCredits ] = useState()
    const { movieId } = useParams()
  
    useEffect(() => {
      fetch(CREDITS_URL(movieId))
        .then((res) => res.json())
        .then((json) => {
          setCredits(json)
        })
    }, [movieId])

    console.log(credits)

    return (
        <div>
            <p></p>
        {credits && (
            <>
        {credits.map((credit) => (
            {credit.map((cast) => 
                <p>{cast.original_name}</p>)}
        ))}
        </>
        )}
        </div>

    )
}