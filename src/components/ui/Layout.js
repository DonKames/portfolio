import React from 'react'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <div className="min-vh-100 bg-dark text-white">
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
