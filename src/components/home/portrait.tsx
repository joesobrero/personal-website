import { Image } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { FADE_IN_DURATION, FRAME_SIZE, PORTRAIT } from 'src/constants';

const motionVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: FADE_IN_DURATION, delay: 0.1 },
  },
  exit: {
    opacity: 0,
  },
};

const Portrait = () => (
  <Image
    as={motion.img}
    initial='initial'
    animate='animate'
    exit='exit'
    variants={motionVariants}
    position='fixed'
    zIndex={'base'}
    bottom={`calc(${FRAME_SIZE} - 1px)`}
    right={`calc(${FRAME_SIZE} - 1px)`}
    boxSize='450px'
    fit='cover'
    src={PORTRAIT.src}
    alt={PORTRAIT.alt}
  />
);

export default Portrait;
