import gql from 'graphql-tag';

export const GITHUB_AUTH = gql`
  mutation githubAuth($code: String!) {
    githubAuth(code: $code) {
      token
    }
  }
`;
