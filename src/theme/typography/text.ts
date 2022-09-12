import { textStyles } from '../global/textStyles';

export const Text = {
  baseStyle: {},
  sizes: {
    '9xl': { fontSize: '9xl' },
    '8xl': { fontSize: '8xl' },
    '7xl': { fontSize: '7xl' },
    '6xl': { fontSize: '6xl' },
    '5xl': { fontSize: '5xl' },
    '4xl': { fontSize: '4xl' },
    '3xl': { fontSize: '3xl' },
    '2xl': { fontSize: '2xl' },
    xl: { fontSize: 'xl' },
    lg: { fontSize: 'lg' },
    md: { fontSize: 'md' },
    sm: { fontSize: 'sm' },
    xs: { fontSize: 'xs' },
  },
  variants: {
    body: textStyles.body,
    caption: textStyles.caption,
    mono: textStyles.mono,
  },
  defaultProps: {},
};
