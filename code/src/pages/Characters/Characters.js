import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CREDITS_URL } from "utils/urls";
import { FaChevronCircleLeft } from "react-icons/fa";
import "./Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetch(CREDITS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.cast);
      });
  }, []);

  return (
    <div>
      <main className="characters-list-container">
        <Link className="back-button" to="/">
          <FaChevronCircleLeft />
          Back to movies
        </Link>

        {characters
          ? characters.map((character) => (
              <article className="character-card" key={character.cast_id}>
                <img
                  src={
                    character.profile_path
                      ? `https://image.tmdb.org/t/p/w342/${character.profile_path}`
                      : "https://i.ibb.co/h9bkbDk/1024px-No-image-available-svg.png"
                  }
                  alt={character.name}
                  className="movie-image"
                />
                <div className="info-characters">
                  <h1>Character: {character.character}</h1>
                  <h1 className="real-name">Name: {character.original_name}</h1>
                </div>
              </article>
            ))
          : ""}
      </main>
    </div>
  );
};

export default Characters;
