import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-right: 50px;
  padding-left: 50px;
  margin-top: 10px;
`;

export const SectionTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  color: #1c85ff;
  padding-left: 50px;
`;

export const List = styled.ul`
  list-style: none;
  color: #fff;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 30px;
  jystify-content: centre;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #0d57aa;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #1c85ff;
    border-bottom: 2px solid #1c85ff;
  }
`;
