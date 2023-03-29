/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';
import Header from 'components/Header';
import SingleMovie from './SingleMovie';

const MovieList = ({
  movieList,
  setPageNumber,
  pageNumber,
  genreList,
  setSelectedGenre,
  selectedGenre
}) => {
  const nextPage = () => {
    setPageNumber((prev) => prev + 1)
  }
  const PreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1)
    }
  }
  return (
    <>
      <Header
        genreList={genreList}
        setSelectedGenre={setSelectedGenre}
        selectedGenre={selectedGenre} />
      <div className="movies-container">
        {movieList.map((movie) => {
          return (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="movie-list-element">
              <SingleMovie movie={movie} />
            </Link>
          );
        })}
      </div>
      <div className="btn-next-prev-container">
        <button className="btn-previous" type="button" onClick={PreviousPage}> <span>Previous</span> <BiCaretLeft size="3em" /></button>
        <button className="btn-next" type="button" onClick={nextPage}><BiCaretRight size="3em" /> <span>Next</span></button>
      </div>
    </>
  )
}

export default MovieList;