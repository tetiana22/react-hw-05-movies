import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 2px solid #0d253f;
  border-radius: 4px;
  padding: 8px;
  margin-right: 15px;
  font-size: 16px;
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
