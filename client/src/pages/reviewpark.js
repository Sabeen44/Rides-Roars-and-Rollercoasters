import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ReviewPark from './ReviewPark';

const ParkProfile = () => {
  const [parkAdded, setParkAdded] = useState(false);
  const [park, setPark] = useState(null);
  const [reviews, setReviews] = useState([]);

  const handleAddPark = () => {
    // Add the park to the profile
    // Set parkAdded to true
    // Set park details
    setParkAdded(true);
    setPark({
      id: 1, // Provide the park ID
      name: 'Park Name', // Provide the park name
      // Other park details
    });
  };

  const handleSaveReview = (review) => {
    // Check if the park is added to the profile
    if (!parkAdded) {
      return;
    }

    // Attach the review to the park
    const updatedPark = {
      ...park,
      reviews: [...(park.reviews || []), review],
    };

    // Update the park and reviews in the state
    setPark(updatedPark);
    setReviews(updatedPark.reviews);
  };

  return (
    <div>
      <h2>Park Profile</h2>
      {parkAdded ? (
        <div>
          <h3>Park Details</h3>
          <p>Park Name: {park.name}</p>
          {/* Display other park details */}
          {/* ... */}
          <h3>Reviews</h3>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <Card key={review.reviewId}>
                <Card.Body>
                  <Card.Text>{review.reviewText}</Card.Text>
                  <Card.Text>Rating: {review.rating}</Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
          <ReviewPark parkId={park.id} onSaveReview={handleSaveReview} />
        </div>
      ) : (
        <div>
          <p>Please add the park to your profile to see the reviews.</p>
          <Button onClick={handleAddPark}>Add Park</Button>
        </div>
      )}
    </div>
  );
};

export default ParkProfile;
