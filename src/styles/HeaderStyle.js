import styled from 'styled-components';

export const Container = styled.div`
  margin: 4rem 4rem;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  display: flex;
  img {
    width: 300px;
  }
`;

export const Options = styled.div`
  justify-content: space-evenly;
  button {
    transition: all 0.3s;
    padding: 1rem;
    cursor: pointer;
    background: none;
    border: none;
    color: #fff;
  }

  button:hover {
    transform: scale(1.1);
  }

  .login {
    background-color: #db202c;
    padding: 1rem 3rem;
    border-radius: 2rem;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
