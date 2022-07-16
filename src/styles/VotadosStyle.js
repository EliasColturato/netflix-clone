import styled from 'styled-components';

export const Container = styled.div`
  justify-content: space-evenly;
  margin: 4rem 0rem;
  color: white;
  h3 {
    margin: 0rem 0rem 2rem 5rem;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }
  span {
    font-weight: 400;
    font-size: 120%;
    text-align: center;
  }
  a {
    transition: all 0.3s;
  }
  a:hover {
    transform: scale(1.1);
  }
`;
