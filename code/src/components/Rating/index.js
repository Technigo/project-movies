import React from 'react';
import styled from 'styled-components';

const RatingCircle = styled.svg`
  height: 100px;
  width: 100px;
  margin: 1em;
  transform: rotate(270deg);
  stroke-dasharray: 271; /* (2pie * radius) */
  stroke-dashoffset: ${(props) => props.ratingVal};

  & > circle {
    stroke: var(--primary);
    fill: var(--dark1);
  }
  & > text {
    fill: white;
  }
`;

const Rating = ({ rating }) => {
  const ratingDegree = 360 - 360 * (rating / 10);
  return (
    <>
      <RatingCircle ratingVal={ratingDegree}>
        <circle cx="50" cy="50" r="40" strokeWidth="6" />
        <text x="39" y="54" transform="rotate(90 50, 50)">
          {rating}
        </text>
      </RatingCircle>
    </>
  );
};

export default Rating;
