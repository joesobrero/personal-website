import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { BsMoon } from 'react-icons/bs';
import { WiDaySunny } from 'react-icons/wi';

const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.2,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeOut',
    },
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 1.8,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeOut',
    },
  },
};

const MotionIconButton = motion<IconButtonProps>(IconButton);

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter>
      <MotionIconButton
        aria-label='Toggle color mode'
        size='lg'
        key={mode('light', 'dark')}
        initial='initial'
        animate='enter'
        exit='exit'
        variant='ghost'
        border={mode('1px solid black', '1px solid white')}
        right='-1px'
        borderRadius={0}
        color={mode('black', 'white')}
        icon={mode(<BsMoon />, <WiDaySunny />)}
        variants={variants}
        onClick={toggleColorMode}
        marginInlineStart={0}
      />
    </AnimatePresence>
  );
};

export default ThemeButton;
