import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px 30px;
  box-shadow: 0px 4px 4px #d3d3d3;
  background-color: #0d253f;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: #fff;
  margin-right: 20px;
  &.active,
  &:hover,
  &:focus {
    color: #1c85ff;
  }
`;
export const Nav = styled.nav`
  margin-left: 60px;
`;
