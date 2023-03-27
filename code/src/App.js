import React from 'react';
import { Header } from 'components/Header'
import { StartPage } from 'components/StartPage'
import { TVseries } from 'components/TVseries'

export const App = () => {
  return (

    <main>
      <Header />
      <StartPage />
      <TVseries />
    </main>
  );
}
