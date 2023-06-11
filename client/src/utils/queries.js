import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email

      savedParks {
        Id
        Name
      }
    }
  }
`;

export const QUERY_PARKS = gql`
  query getParks {
    parks {
      _id
      title
      description
      image
      review
    }
  }
`;
