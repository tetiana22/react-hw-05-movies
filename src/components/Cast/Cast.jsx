import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'components/Api/Api';
import { List, ListItem, Section } from 'components/MovieList/MovieList.styled';
import { Info, Name } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchMovieCasts = async () => {
      try {
        const actors = await fetchMovieCast(movieId);
        setActors(actors);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieCasts();
  }, [movieId]);

  return (
    <Section>
      <List>
        {actors.map(actor => (
          <ListItem key={actor.id}>
            <img
              width="200px"
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={actor.original_name}
            />
            <Info>
              <Name>{actor.name}</Name>
              <p>Character: {actor.character}</p>
            </Info>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default Cast;
