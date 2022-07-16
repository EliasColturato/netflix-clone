import React from 'react';
import { Container, MovieList, Movie } from '../styles/VotadosStyle';
import { APIKey } from '../configs/key';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const settings = {
  infinite: false,
  speed: 700,
  slidesToShow: 5,
  slidesToScroll: 5,
  focusOnSelect: true,
};

const FilmesVotados = () => {
  const [movies, setMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(data => setMovies(data.results));
  });

  return (
    <>
      <Container>
        <h3>Filmes mais Votados.</h3>
        <MovieList>
          <Slider {...settings}>
            {movies.map(movies => {
              return (
                <Movie key={movies.id}>
                  <Link to={`/details/${movies.id}`}>
                    <img
                      src={`${image_path}${movies.poster_path}`}
                      alt="{movie.title}"
                    />
                  </Link>
                  <span>{movies.title}</span>
                </Movie>
              );
            })}
          </Slider>
        </MovieList>
      </Container>
    </>
  );
};

export default FilmesVotados;
