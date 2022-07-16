import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { APIKey } from '../configs/key';
import { Container } from '../styles/DetailsStyle';

export default function Details(mudaScreen) {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const image_path = 'https://image.tmdb.org/t/p/w500/';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, overview, release_date } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
        };
        setMovie(movie);
      });
  }, [id]);

  setTimeout(() => {
    setLoading(false);
  }, 600);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            flexDirection: 'column',
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1128px-Netflix_2015_N_logo.svg.png"
            alt="logo"
            width="50px"
            style={{ marginBottom: '5rem' }}
          />
          <img
            src="/img/loading.png"
            className="App-logo"
            alt="loading"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      ) : (
        <>
          <Container>
            <div className="movie">
              <img src={movie.image} alt="{movie.title}" />
              <div className="details">
                <h1>{movie.title}</h1>
                <span>{movie.sinopse}</span>
                <span className="release-date">
                  Release Date: {movie.releaseDate}
                </span>
                <Link to="/">
                  <button className="back">Voltar</button>
                </Link>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
}
