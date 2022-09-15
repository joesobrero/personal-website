import { mode } from '@chakra-ui/theme-tools';
export const styles = {
  global: (props) => ({
    'html, body': {
      w: '100vw',
      bg: mode('white', 'gray.950')(props),
      color: mode('black', 'white')(props),
      overflowY: 'auto',
      overflowX: 'hidden',
      scrollbarGutter: 'stable',
      scrollBehavior: 'smooth',
    },
    '::-webkit-scrollbar': {
      display: 'none',
    },
  }),
};
