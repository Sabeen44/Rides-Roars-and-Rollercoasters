// // import React, { useState } from 'react';
// // import { Form, Button } from 'react-bootstrap';
// // import { addReviewToPark } from '../utils/localStorage';

// // const ReviewPark = ({ parkId, onSaveReview }) => {
// //   const [reviewText, setReviewText] = useState('');
// //   const [rating, setRating] = useState(0);

// //   const handleReviewSubmit = (event) => {
// //     event.preventDefault();

// //     // Validate reviewText and rating before saving
// //     if (!reviewText || rating === 0) {
// //       return false;
// //     }

// //     // Create a new review object
// //     const newReview = {
// //       parkId: parkId,
// //       reviewText: reviewText,
// //       rating: rating,
// //       reviewId: Math.floor(Math.random() * 1000) // Generate a random review ID
// //     };

// //     // Call the onSaveReview function passed from the parent component
// //     onSaveReview(newReview);

// //     // Add the review to the park
// //     addReviewToPark(parkId, newReview.reviewId);

// //     // Clear the form inputs
// //     setReviewText('');
// //     setRating(0);
// //   };

// //   return (
// //     <Form onSubmit={handleReviewSubmit}>
// //       <Form.Group>
// //         <Form.Label>Review Text:</Form.Label>
// //         <Form.Control
// //           as="textarea"
// //           rows={3}
// //           value={reviewText}
// //           onChange={(e) => setReviewText(e.target.value)}
// //         />
// //       </Form.Group>
// //       <Form.Group>
// //         <Form.Label>Rating:</Form.Label>
// //         <Form.Control
// //           as="select"
// //           value={rating}
// //           onChange={(e) => setRating(parseInt(e.target.value))}
// //         >
// //           <option value={0}>Select rating</option>
// //           <option value={1}>1</option>
// //           <option value={2}>2</option>
// //           <option value={3}>3</option>
// //           <option value={4}>4</option>
// //           <option value={5}>5</option>
// //         </Form.Control>
// //       </Form.Group>
// //       <Button type="submit" variant="primary">Submit Review</Button>
// //     </Form>
// //   );
// // };

// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { ADD_REVIEW } from "../utils/mutations"; // import your mutation

// // a custom component to display an image with a review input
// const ReviewPark = ({ review }) => {
//   const [reviewText, setReviewText] = useState(""); // state for the review text
//   const [addReview, { loading, error }] = useMutation(ADD_REVIEW); // use the mutation hook

//   // handle the change of the review input
//   const handleChange = (e) => {
//     setReviewText(e.target.value);
//   };

//   // handle the submit of the review form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // call the mutation with the image id and the review text as variables
//     addReview({ variables: { reviewText } });
//     // clear the input field
//     setReviewText("");
//   };

//   return (
//     <div className="park-review">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={reviewText}
//           onChange={handleChange}
//           placeholder="Write a review..."
//         />{" "}
//         // display the review input
//         <button type="submit" disabled={loading}>
//           Submit
//         </button>{" "}
//         // display the submit button
//       </form>
//       {error && <p>{error.message}</p>} // display any error message
//     </div>
//   );
// };
// export default ReviewPark;
