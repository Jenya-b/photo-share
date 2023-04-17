import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query allUsers {
    totalUsers
    allUsers {
      githubLogin
      name
      avatar
    }
  }
`;
