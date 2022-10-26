import { extendTheme, theme as base } from '@chakra-ui/react';
import { sizes } from './global/sizes';
import { styles } from './global/styles';
import { colors } from './global/colors';
import { Text } from './typography/text';
import { Heading } from './typography/heading';
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './global/fonts';
import { Button } from './forms/button';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const components = {
  Text,
  Heading,
  Button,
};

const theme = extendTheme({
  config,
  styles,
  colors,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  components,
});

export default theme;
