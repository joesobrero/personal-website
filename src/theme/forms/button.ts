import { useColorModeValue as mode } from '@chakra-ui/react';
import { textStyles } from '../global/textStyles';
const buttonTextStyle = textStyles.button;
const transition = '0.28s';

export const Button = {
  baseStyle: {
    buttonTextStyle,
  },

  sizes: {
    xl: {
      h: 'auto',
      fontWeight: 500,
      fontSize: 'xl',
      px: 5,
      py: 4,
      minH: 16,
      minW: 16,
      borderRadius: 'sm',
    },
    lg: {
      h: 'auto',
      fontSize: 'lg',
      fontWeight: 500,
      px: 4,
      py: 3,
      minH: 12,
      minW: 12,
      borderRadius: 'sm',
    },
    md: {
      h: 'auto',
      fontSize: 'md',
      fontWeight: 500,
      letterSpacing: 'wide',
      px: 3.5,
      py: 2.5,
      minH: 8,
      minW: 8,
      borderRadius: 'md',
    },
    sm: {
      h: 'auto',
      fontSize: 'sm',
      fontWeight: 600,
      letterSpacing: 'wide',
      px: 2.5,
      py: 2,
      minH: 6,
      minW: 6,
      borderRadius: 'md',
    },
  },

  variants: {
    solid: (props) => ({
      color: mode('black', 'white'),
      transition: '0.28s',
      bg: 'purpleAlpha.300',
      _hover: {
        bg: 'purpleAlpha.100',
        boxShadow: mode('xs', 'xs-dark'),
        textDecoration: 'none',
      },
      _focus: {
        bg: 'transparent',
        boxShadow: 'none',
      },
      _active: {
        transition: '0s',
        bg: 'transparent',
        boxShadow: mode('inner', 'inner-dark'),
      },
    }),

    outline: (props) => ({
      borderStyle: 'solid',
      borderWidth: '1px',
      transition: transition,
      bg: 'transparent',
      color: mode('purple.600', 'purple.400'),
      textDecoration: 'none',
      borderColor: 'purpleAlpha.500',
      _hover: {
        bg: 'purpleAlpha.100',
        boxShadow: mode('sm', 'sm-dark'),
        textDecoration: 'none',
      },
      _focus: {
        borderColor: mode('purple.600', 'purple.400'),
        boxShadow: 'none',
      },
      _active: {
        transition: '0s',
        bg: 'transparent',
        color: 'purple.500',
        borderColor: 'purpleAlpha.300',
        boxShadow: mode('inner', 'inner-dark'),
      },
    }),

    'outline-gray': (props) => ({
      borderStyle: 'solid',
      borderWidth: '1px',
      transition: transition,
      bg: 'transparent',
      color: mode('blackAlpha.700', 'whiteAlpha.700'),
      textDecoration: 'none',
      borderColor: mode('blackAlpha.500', 'whiteAlpha.500'),
      _hover: {
        bg: mode('blackAlpha.100', 'whiteAlpha.100'),
        boxShadow: mode('sm', 'sm-dark'),
        textDecoration: 'none',
      },
      _focus: {
        borderColor: 'whiteAlpha.700',
        boxShadow: 'none',
      },
      _active: {
        transition: '0s',
        bg: 'transparent',
        color: mode('blackAlpha.500', 'whiteAlpha.500'),
        borderColor: mode('blackAlpha.500', 'whiteAlpha.300'),
        boxShadow: mode('inner', 'inner-dark'),
      },
    }),

    ghost: (props) => ({
      transition: transition,
      bg: 'transparent',
      color: mode('black.100', 'purple.400'),
      _hover: {
        bg: 'purpleAlpha.100',
      },
      _focus: {
        bg: 'purpleAlpha.100',
        boxShadow: 'none',
      },
      _active: {
        transition: '0s',
        bg: 'transparent',
        color: mode('purple.500', 'purple.500'),
        boxShadow: mode('inner', 'inner-dark'),
      },
    }),

    link: (props) => ({
      color: 'primary',
      transition: transition,
      textDecoration: 'none',
      _hover: {
        color: props.mode === 'light' ? 'purple.600' : 'purple.400',
        textDecoration: 'none',
      },
      _focus: {
        color: props.mode === 'light' ? 'purple.600' : 'purple.400',
        boxShadow: 'none',
        textDecoration: 'none',
      },
      _active: {
        color: props.mode === 'light' ? 'purple.400' : 'purple.600',
        textDecoration: 'none',
        transition: '0s',
      },
    }),

    'link-white': (props) => ({
      color: 'whiteAlpha.700',
      transition: transition,
      textDecoration: 'none',
      _hover: {
        color: 'whiteAlpha.800',
        textDecoration: 'none',
      },
      _focus: {
        color: 'whiteAlpha.800',
        boxShadow: 'none',
        textDecoration: 'none',
      },
      _active: {
        color: 'whiteAlpha.500',
        textDecoration: 'none',
        transition: '0s',
      },
    }),

    'nav-link': (props) => ({
      color: mode('black', 'white'),
      transition: transition,
      textDecoration: 'none',
      _hover: {
        color: mode('purple.700', 'purple.300'),
        textDecoration: 'none',
      },
      _focus: {
        color: mode('purple.700', 'purple.300'),
        boxShadow: 'none',
        textDecoration: 'none',
      },
      _active: {
        color: mode('purple.600', 'purple.400'),
        textDecoration: 'none',
        transition: '0s',
      },
    }),

    'external-link': (props) => ({
      fontWeight: 'normal',
      color: 'blue.500',
      transition: transition,
      textDecoration: 'none',
      p: 0,
      _hover: {
        color: props.mode === 'light' ? 'blue.600' : 'blue.400',
        textDecoration: 'none',
      },
      _focus: {
        color: props.mode === 'light' ? 'blue.600' : 'blue.400',
        boxShadow: 'none',
        textDecoration: 'none',
      },
      _active: {
        color: props.mode === 'light' ? 'blue.400' : 'blue.600',
        textDecoration: 'none',
        transition: '0s',
      },
    }),

    destructive: (props) => ({
      transition: transition,
      bg: 'transparent',
      color: mode('red.600', 'red.400'),
      _hover: {
        bg: 'redAlpha.100',
      },
      _focus: {
        bg: 'redAlpha.100',
        boxShadow: 'none',
      },
      _active: {
        transition: '0s',
        bg: 'transparent',
        color: mode('red.500', 'red.500'),
        boxShadow: mode('inner', 'inner-dark'),
      },
    }),

    disabled: (props) => ({
      opacity: 0.5,
      color: mode('white', 'black'),
      transition: '0.28s',
      bg: mode('purple.600', 'purple.300'),
      _hover: {
        opacity: 0.5,
        color: mode('white', 'black'),
        transition: '0s',
        bg: mode('purple.600', 'purple.300'),
        boxShadow: mode('xs', 'xs-dark'),
        textDecoration: 'none',
      },
      _focus: {
        opacity: 0.5,
        color: mode('white', 'black'),
        transition: '0s',
        bg: mode('purple.600', 'purple.300'),
        boxShadow: 'none',
      },
    }),
  },

  defaultProps: {
    size: 'md',
  },
};
