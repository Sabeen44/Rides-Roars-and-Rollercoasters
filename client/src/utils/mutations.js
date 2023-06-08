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

export const SAVE_BOOK = gql`
  mutation saveReview($reviewData: ReviewInput!) {
    saveReview(bookReview: $reviewData) {
      _id
      username
      email

      savedReviews {
        reviewId
        user
        title
        description
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeReview($reviewId: ID!) {
    removeReview(reviewId: $reviewId) {
      _id
      username
      email
      bookCount
      savedReviews {
        reviewId
        user
        title
        description
      }
    }
  }
`;
