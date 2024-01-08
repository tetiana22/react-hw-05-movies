import React from 'react';
import {
  Section,
  SectionTitle,
  List,
  ListItem,
  StyledLink,
} from './MovieList.styled';
import { useLocation } from 'react-router-dom';

const MovieList = ({ trendingMovies }) => {
  const location = useLocation();
  return (
    <Section>
      <SectionTitle>Trending Movies</SectionTitle>
      <List>
        {trendingMovies.map(trendingMovie => (
          <ListItem key={trendingMovie.id}>
            <StyledLink
              to={`/movies/${trendingMovie.id}`}
              state={{ from: location }}
            >
              {trendingMovie.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default MovieList;
