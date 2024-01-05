import {
  Section,
  List,
  ListItem,
  StyledLink,
} from '../MovieList/MovieList.styled';

const SeachMovieList = ({ searchingMovies }) => {
  return (
    <Section>
      <List>
        {searchingMovies.map(searchingMovie => (
          <ListItem key={searchingMovie.id}>
            <StyledLink to={`/movies/${searchingMovie.id}`}>
              {searchingMovie.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default SeachMovieList;
