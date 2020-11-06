import React from 'react';
import { useParams } from 'react-router-dom';

export const TVShowDetails = () => {
  const { id } = useParams();
  console.log(id);

  return <section className="tv-show-container">Hello World!</section>
}