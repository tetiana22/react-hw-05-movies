import { Form, Input, Button } from './SeachMovie.styled.jsx';

const SeachMovies = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preaventDefault();
    const query = e.target.elements.query.value;
    onSubmit(query);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit">Seach</Button>
      <Input type="text" name="query" placeholder="Search movies" />
    </Form>
  );
};

export default SeachMovies;
