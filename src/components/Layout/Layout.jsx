import React, { Suspense } from 'react';
import { Header, StyledNavLink, Nav } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
