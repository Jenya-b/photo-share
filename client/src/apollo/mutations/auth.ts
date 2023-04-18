import { gql } from '@apollo/client';

export const GITHUB_AUTH = gql`
  mutation githubAuth($code: String!) {
    githubAuth(code: $code) {
      token
    }
  }
`;
