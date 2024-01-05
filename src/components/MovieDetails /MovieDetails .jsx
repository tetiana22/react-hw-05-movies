import { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'components/Api/Api';
import {
  ListItem,
  Section,
  SectionTitle,
} from 'components/MovieList/MovieList.styled';
import { Button, SectionInfo, ListInfo, LinkInfo } from './MovieDetails.styled';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectMovie, setSelectMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setSelectMovie(movie);
        setLoading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(movieId);
  }, [movieId]);

  return (
    <Section>
      <Link to={location.state?.from ?? '/'}>
        <Button type="button">Go back</Button>
      </Link>
      {loading && <Loader />}
      <MovieCard movie={selectMovie} />
      <SectionInfo>
        <SectionTitle>Additional information</SectionTitle>
        <ListInfo>
          <ListItem>
            <LinkInfo to="cast">Cast</LinkInfo>
          </ListItem>
          <ListItem>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </ListItem>
        </ListInfo>
        <hr />
        <Outlet />
      </SectionInfo>
    </Section>
  );
};

export default MovieDetails;
