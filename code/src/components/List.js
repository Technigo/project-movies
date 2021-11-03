import React from "react";
import { Link } from "react-router-dom";

/* Styled component? 
Const Section = styled.section`

`; */

const List = ({ movies }) => {
  return (
    <section>
      {/*  {movies.map((movies) => (
        <Link to={`/details/${movies.name}`} key={movies.original_title}>
          {movies.original_title}
        </Link>
      ))} */}
      Here I will map the movie pictures with link
    </section>
  );
};

export default List;
