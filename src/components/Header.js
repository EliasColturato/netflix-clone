import React from 'react';
import { Container, Options } from '../styles/HeaderStyle';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Container>
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt=""
        />
        <Options>
          <button className="popular">Filmes Populares</button>
          <Link to="/votados">
            <button className="rating">Mais Votados</button>
          </Link>
          <button className="mylist">Minha Lista</button>
          <button className="login">Entrar</button>
        </Options>
      </Container>
    </>
  );
};

export default Header;
