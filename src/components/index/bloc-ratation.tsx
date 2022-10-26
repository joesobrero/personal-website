import { useColorModeValue as mode, Image, Skeleton } from '@chakra-ui/react';
import { BLOC_LOGOS } from '@/data/bloc';
import { motion, Variants } from 'framer-motion';

const motionVariants: Variants = {
  initial: {
    rotateX: 0,
  },
  animate: {
    rotateY: ['-180deg', '0deg'],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatDelay: 0,
      repeatType: 'mirror',
      type: 'linear',
    },
  },
  exit: {
    opacity: 0,
  },
};

const BlocRotation = () => (
  <Image
    w='50%'
    minW='250px'
    h='50%'
    as={motion.img}
    src={mode(BLOC_LOGOS[0].lightModeSrc, BLOC_LOGOS[0].darkModeSrc)}
    alt={BLOC_LOGOS[0].alt}
    initial='initial'
    animate='animate'
    exit='exit'
    variants={motionVariants}
    fallback={<Skeleton boxSize='50%' />}
  />
);

export default BlocRotation;
