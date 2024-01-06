import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  list-style: none;
  padding-left: 20px;
  font-weight: 600;
  font-size: 18px;
  color: #fff;

  &:hover {
    color: #1c85ff;
  }
`;

export const SectionDetails = styled.section`
  padding-right: 50px;
  padding-left: 90px;
  margin-top: 10px;
`;

export const SectionTitleDetails = styled.h2`
  margin-top: 100px;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  color: #1c85ff;
  padding-top: 20px;
  padding-left: 50px;
`;
export const SectionInfo = styled.div`
  box-shadow: 0px 4px 4px #d3d3d3;
  background-color: #0d253f;
  list-style: none;
  padding-bottom: 20px;
`;
export const Li = styled.ul`
  list-style: none;
`;

export const Button = styled.button`
  border: 2px solid #0d253f;
  border-radius: 4px;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  background: linear-gradient(#01b4e4, #90cea1);

  -webkit-animation: AnimationName 44s ease infinite;
  -moz-animation: AnimationName 44s ease infinite;
  animation: AnimationName 44s ease infinite;
  &:hover,
  &:focus {
    color: #ffffff;
  }
`;
export const ListDetails = styled.li`
  text-align: center;
  padding-bottom: 15px;
`;
