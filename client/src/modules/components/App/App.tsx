import { StrictMode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from 'styles/theme';
import { client } from 'apollo/client';
import GlobalStyles from 'styles/global';
import { router } from 'modules/router/router';

export const App = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
        <GlobalStyles />
      </ApolloProvider>
    </ThemeProvider>
  </StrictMode>
);
