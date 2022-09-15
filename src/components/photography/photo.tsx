import { PhotographyImg } from '@/data/photos';
import { Image, AspectRatio, GridItem } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { FADE_IN_DURATION } from 'src/constants';

const DELAY = 0.4;

const motionVariants: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: FADE_IN_DURATION * 2,
      delay: DELAY + 0.2 * index,
    },
  }),
  exit: {
    scale: 0.8,
    opacity: 0,
  },
};
const Photo = (photo: PhotographyImg, index: number) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <GridItem
      key={photo.title}
      // animate
      layout
      as={motion.div}
      initial='initial'
      animate='animate'
      custom={index}
      transition={{ type: 'spring' }}
      exit='exit'
      variants={motionVariants}
      // state
      onClick={() => setOpen(!isOpen)}
    >
      <AspectRatio ratio={1.618}>
        <Image src={photo.src} alt={photo.alt} />
      </AspectRatio>
    </GridItem>
  );
};

const MotionPhoto = motion(Photo);

export default Photo;
