import React from 'react';
import { Form, Input, Button } from './SeachMovie.styled';

const SeachMovies = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    onSubmit(query);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit">Search</Button>
      <Input type="text" name="query" placeholder="Search movies" />
    </Form>
  );
};

export default SeachMovies;
