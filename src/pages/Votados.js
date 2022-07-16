import React from 'react';
import { useState } from 'react';

export default function Votados(mudaScreen) {
  const [loading, setLoading] = useState(true);

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
          <h1>Votados</h1>
        </>
      )}
    </>
  );
}
