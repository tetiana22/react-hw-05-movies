import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import {
  List,
  Section,
  SectionTitle,
  ListItem,
} from 'components/MovieList/MovieList.styled';
import { NoReviewsText, Text } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await fetchMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <Section>
      {reviews.length ? (
        <List>
          {reviews.map(review => (
            <ListItem key={review.id}>
              <SectionTitle>Author: {review.author}</SectionTitle>
              <Text>{review.content}</Text>
            </ListItem>
          ))}
        </List>
      ) : (
        <NoReviewsText>
          We don't have any reviews for this movie yet.
        </NoReviewsText>
      )}
    </Section>
  );
};

export default Reviews;
