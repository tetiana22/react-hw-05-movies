import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SeachMovies from '../SeachMovie/SeachMovie';
import { fetchMovieByName } from 'components/Api/Api';
import SeachMovieList from '../SeachMoviesList/SeachMovieList';
import { Section, SectionTitle } from 'components/MovieList/MovieList.styled';

const Movies = () => {
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const fetchData = async () => {
      try {
        const results = await fetchMovieByName(query);
        if (results.length === 0) {
          toast.dismiss();
          toast.error('No movies found');
          setSearchingMovies([]);
        } else {
          setSearchingMovies(results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams('query', query);
  };
  console.log(searchingMovies);
  return (
    <Section>
      <SectionTitle>Movies</SectionTitle>
      <SeachMovies onSubmit={handleSubmit}></SeachMovies>
      <SeachMovieList searchingMovies={searchingMovies}></SeachMovieList>
    </Section>
  );
};

export default Movies;
