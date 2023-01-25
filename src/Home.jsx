import React from 'react';
import { Header } from './ui/Header';
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
