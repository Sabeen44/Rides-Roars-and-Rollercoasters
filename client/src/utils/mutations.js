import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_PARK = gql`
  mutation savePark($parkData: ParkInput!) {
    savePark(parkData: $parkData) {
      _id
      name
      reviews {
        _id
        user
        title
      }
    }
  }
`;

export const REMOVE_PARK = gql`
  mutation removePark($parkId: ID!) {
    removePark(parkId: $parkId) {
      _id
      name
      reviews {
        _id
        user
        title
      }
    }
  }
`;

export const SAVE_REVIEW = gql`
  mutation saveReview($reviewData: ReviewInput!) {
    saveReview(reviewData: $reviewData) {
      _id
      user
      title
      description
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation removeReview($reviewId: ID!) {
    removeReview(reviewId: $reviewId) {
      _id
      user
      title
      description
    }
 `;

export const ADD_REVIEW = gql`
  mutation addReview($reviewId: ID!) {
    addReviews(input: { reviewId: $reviewId, reviewText: $reviewText }) {
      _id
      reviewsText
    }
  }
`;
