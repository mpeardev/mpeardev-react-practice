import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Main } from '../Main';
import { ActressesGallery } from '../modules/actresses';
import { QuotesList } from '../modules/quotes';
import { FormTypes } from '../modules/forms';
import { TicTac } from '../modules/tictac';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="actresses" element={<ActressesGallery />} />
        <Route path="quotes" element={<QuotesList />} />
        <Route path="forms" element={<FormTypes />} />
        <Route path="tictac" element={<TicTac />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
