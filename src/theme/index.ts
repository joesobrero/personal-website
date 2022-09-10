import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { sizes } from './global/sizes';
import { styles } from './global/styles';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme(
  { config, styles, sizes },
  withDefaultColorScheme({ colorScheme: 'orange' })
);

export default theme;
