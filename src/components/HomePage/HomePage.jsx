import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { fetchTrendingMovies } from '../Api/Api';
import MovieList from '../MovieList/MovieList';


const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchTrendingMovies();
        setTrendingMovies(results);
        setLoading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MovieList trendingMovies={trendingMovies} />
      {loading && <Loader />}
    </>
  );
};

export default HomePage;
