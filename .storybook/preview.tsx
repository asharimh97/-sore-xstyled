import React from "react";
import type { Preview } from "@storybook/react";
import { Preflight, theme } from "../src/_styles"
import { ThemeProvider } from "styled-components";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <ThemeProvider theme={theme}>
          <Preflight />
          <Story />
        </ThemeProvider>
      </>
    )
  ]
};

export default preview;
