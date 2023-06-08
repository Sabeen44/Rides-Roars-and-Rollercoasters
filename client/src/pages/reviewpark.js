import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addReviewToPark } from '../utils/localStorage';

const ReviewPark = ({ parkId, onSaveReview }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    // Validate reviewText and rating before saving
    if (!reviewText || rating === 0) {
      return false;
    }

    // Create a new review object
    const newReview = {
      parkId: parkId,
      reviewText: reviewText,
      rating: rating,
      reviewId: Math.floor(Math.random() * 1000) // Generate a random review ID
    };

    // Call the onSaveReview function passed from the parent component
    onSaveReview(newReview);

    // Add the review to the park
    addReviewToPark(parkId, newReview.reviewId);

    // Clear the form inputs
    setReviewText('');
    setRating(0);
  };

  return (
    <Form onSubmit={handleReviewSubmit}>
      <Form.Group>
        <Form.Label>Review Text:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Rating:</Form.Label>
        <Form.Control
          as="select"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
        >
          <option value={0}>Select rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      <Button type="submit" variant="primary">Submit Review</Button>
    </Form>
  );
};

export default ReviewPark;
