import React from 'react';

import { ThemeProvider } from 'react-jss';

import theme from '../../theme';

export default ({ children }) => (
  <ThemeProvider theme={ theme }>
    { children }
  </ThemeProvider>
);
