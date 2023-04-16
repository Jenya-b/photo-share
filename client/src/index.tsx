import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { App } from 'components/App/App';
import { theme } from 'styles/theme';
import { client } from 'apollo/client';
import GlobalStyles from 'styles/global';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
        <GlobalStyles />
      </ApolloProvider>
    </ThemeProvider>
  </StrictMode>
);
