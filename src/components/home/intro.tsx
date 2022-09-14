import {
  VStack,
  Heading,
  useColorModeValue as mode,
  HStack,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import React from 'react';
import { FADE_IN_DURATION } from 'src/constants';

const motionVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: FADE_IN_DURATION, delay: 0.2 },
  },
  exit: {
    opacity: 0,
  },
};

const Intro = () => (
  <HStack
    align='start'
    as={motion.section}
    initial='initial'
    animate='animate'
    exit='exit'
    variants={motionVariants}
  >
    <VStack w='full' align='start'>
      <Heading py={1} variant='title' w='full' as='h1'>
        Product Designer
      </Heading>
      <Heading py={1} variant='title' as='h1' w='full'>
        & Web Developer
      </Heading>
    </VStack>
  </HStack>
);

const MotionIntro = motion(Intro);

export default Intro;
