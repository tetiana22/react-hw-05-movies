import { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'components/Api/Api';
import {
  Button,
  SectionInfo,
  LinkInfo,
  Li,
  ListDetails,
  SectionTitleDetails,
  SectionDetails,
} from './MovieDetails.styled';
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
    <>
      {loading && <Loader />}

      <SectionDetails>
        <Link to={location.state?.from ?? '/'}>
          <Button type="button">Go back</Button>
        </Link>
        <MovieCard movie={selectMovie} />
      </SectionDetails>
      <SectionInfo>
        <SectionTitleDetails>Additional information</SectionTitleDetails>
        <ListDetails>
          <Li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </Li>
          <Li>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </Li>
        </ListDetails>
        <Outlet />
      </SectionInfo>
    </>
  );
};

export default MovieDetails;
