import { extendTheme, theme as base } from '@chakra-ui/react';
import { sizes } from './global/sizes';
import { styles } from './global/styles';
import { colors } from './global/colors';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, colors, sizes });

export default theme;
