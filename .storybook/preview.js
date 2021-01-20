// See https://www.learnstorybook.com/design-systems-for-developers/react/en/build/

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../src/styles/GlobalStyle';
import { theme } from "../src/theme"

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}