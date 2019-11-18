import React from 'react';

import Routes from './routes';

import GlobalStyle from './styles/global';

// app -> componente raiz da aplicação
function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
