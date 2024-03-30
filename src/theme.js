import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#E6F6FF',
      100: '#BAE3FF',
      // Add more shades of primary color if needed
    },
    // Define other custom colors as needed
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  // Define other custom theme properties such as typography, spacing, etc.
});

export default theme;
