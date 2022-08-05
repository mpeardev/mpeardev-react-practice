import React from 'react';
import { Header } from './components';
import { Router } from './router/router';
import './style.css';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
    </>
  );
};
