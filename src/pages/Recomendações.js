import React from 'react';
import { useState, useEffect } from 'react';
import { APIKey } from '../configs/key';
import {
  ContainerVideo,
  ListRecommendations,
} from '../styles/RecomendacaoStyle';
import Slider from 'react-slick';

export default function Recomendacoes() {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
    focusOnSelect: true,
  };

  const [recomendacao, setRecomendacao] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetch(
      `
      https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(data => {
        setRecomendacao(data.results);
      });
  });

  return (
    <>
      <ContainerVideo>
        <h3>Recomendações</h3>
        <Slider {...settings}>
          {recomendacao.map(recomendacao => {
            return (
              <ListRecommendations key={recomendacao.id}>
                <img src={`${image_path}${recomendacao.poster_path}`} alt="" />
                <span>{recomendacao.title}</span>
              </ListRecommendations>
            );
          })}
        </Slider>
      </ContainerVideo>
    </>
  );
}
