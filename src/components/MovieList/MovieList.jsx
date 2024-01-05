import React from 'react';
import {
  Section,
  SectionTitle,
  List,
  ListItem,
  StyledLink,
} from './MovieList.styled';

const MovieList = ({ trendingMovies }) => {
  return (
    <Section>
      <SectionTitle>Trending Movies</SectionTitle>
      <List>
        {trendingMovies.map(trendingMovie => (
          <ListItem key={trendingMovie.id}>
            <StyledLink to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default MovieList;
