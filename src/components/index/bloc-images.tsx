import { Image } from '@chakra-ui/react';
import { BLOC_LOGOS } from '@/data/bloc';
import { motion, Variants } from 'framer-motion';

const motionVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: [0, 1, 1, 1, 1, 1, 0],
    transition: {
      duration: 2,
      delay: 2 * index,
      repeat: Infinity,
      repeatDelay: 24,
      // type: 'spring',
    },
  }),
  exit: {
    opacity: 0,
  },
};

const BlocImages = () => {
  let images = [];

  BLOC_LOGOS.forEach((logo, index) =>
    images.push(
      <Image
        key={'bloc' + index}
        custom={index}
        position='absolute'
        w='50%'
        h='50%'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        as={motion.img}
        src={logo.lightModeSrc}
        alt={logo.alt}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={motionVariants}
      />
    )
  );

  return images;
};

export default BlocImages;
