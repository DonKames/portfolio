import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../ui/Layout';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />} />
    </Routes>
  )
};