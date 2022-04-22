import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../home/HomeScreen';
import { Layout } from '../ui/Layout';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
        </Route>
    </Routes>
  )
};