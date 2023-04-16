import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.REACT_APP_GRAPHQL_API,
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/apollo/__generated__/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
