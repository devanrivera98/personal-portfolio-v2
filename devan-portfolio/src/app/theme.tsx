import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

export const theme = extendTheme({
  //font customization is for Chakra components only will not effect individual elements
  fonts: {
    heading: 'var(--font-montserrat)',
    body: 'var(--font-open-sans)',
  },
  styles: {
  //globally state the desire fonts for when Chakra components arent used
    global: {
      'html, body': {
        fontFamily: 'var(--font-open-sans)',
      },
      h1: {
        fontFamily: 'var(--font-montserrat)',
      },
    },
  },
  initialColorMode: 'dark',
  colors: {
    light: {
      bg: '#ffffff',
      text: '#000000'
    },
    dark: {
      bg: '#1a202c',
      text: '#ffffff'
    }
  }
});
