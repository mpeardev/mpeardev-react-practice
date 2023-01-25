import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Main } from '../Main';
import { ActressesGallery } from '/src/modules/actresses';
import { QuotesList } from '/src/modules/quotes';
import { FormTypes } from '/src/modules/forms';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="actresses" element={<ActressesGallery />} />
        <Route path="quotes" element={<QuotesList />} />
        <Route path="forms" element={<FormTypes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
