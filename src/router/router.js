import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ActressesGallery, QuotesList, Main, FormTypes } from '../components';

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
