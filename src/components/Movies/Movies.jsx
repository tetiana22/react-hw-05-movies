import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SeachMovies from '../SeachMovie/SeachMovie';
import { fetchMovieByName } from '../Api/Api';
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
        setSearchingMovies(results);
        if (results.length === 0) {
          toast.dismiss();
          toast.error('There is no movies with this request');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchParams]);

  const handleSubmit = query => {
    if (!query) {
      toast.error('Please enter something');
      return;
    }

    setSearchParams({ query });
  };

  return (
    <Section>
      <SectionTitle>Movies</SectionTitle>
      <SeachMovies onSubmit={handleSubmit}></SeachMovies>
      <SeachMovieList searchingMovies={searchingMovies}></SeachMovieList>
    </Section>
  );
};

export default Movies;
