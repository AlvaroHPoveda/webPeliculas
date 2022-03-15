import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/movies.css";

const Movies = () => {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=5c579afc13f9a72951fe55a280f3b13c&language=en-US&page=1`
      )
      .then((res) => {
        setMovies({
          all: res.data,
          movies: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(movies.movies);

  return (
    <section className="sectionMovies">
      <h1 className="h1Movies">Page Movies</h1>
      <article className="divMovies">
        {movies.movies?.map((movie) => (
          <ul className="ulMovies">
            <li className="liMovies">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt=""
                className="imgMovies"
              />
              <h4 className="titleMovies">{movie.original_title}</h4>
              <p className="pMovies">{movie.overview}</p>
            </li>
          </ul>
        ))}
      </article>
    </section>
  );
};

export default Movies;
