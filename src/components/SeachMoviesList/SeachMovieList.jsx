import { Section, List, ListItem } from '../MovieList/MovieList.styled';

import { Link, useLocation } from 'react-router-dom';

const SeachMovieList = ({ searchingMovies }) => {
  const location = useLocation();

  return (
    <Section>
      <List>
        {searchingMovies.map(searchingMovie => (
          <ListItem key={searchingMovie.id}>
            <Link
              to={`/movies/${searchingMovie.id}`}
              state={{ from: location }}
            >
              {searchingMovie.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default SeachMovieList;
