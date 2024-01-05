import React, { Suspense } from 'react';
import { Header, StyledNavLink } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
