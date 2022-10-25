import { PHOTOGRAPHY } from '@/data/photos';
import { Image, AspectRatio, GridItem, Skeleton } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
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
      type: 'spring',
    },
  }),
  exit: {
    scale: 1,
    opacity: 0,
  },
  hover: {
    boxShadow:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    scale: 1.005,
    transition: { delay: 0, duration: 0.5 },
  },
};

const renderPhotoCovers = (setSelectedIndex: Function) => {
  let covers = [];
  PHOTOGRAPHY.forEach((photo, index) =>
    covers.push(
      <GridItem
        key={'photo' + index}
        layoutId={'photo' + index}
        as={motion.div}
        layout
        custom={index}
        initial='initial'
        animate='animate'
        exit='exit'
        whileHover='hover'
        variants={motionVariants}
        onClick={() => setSelectedIndex(index)}
        cursor='zoom-in'
      >
        <AspectRatio ratio={1.618}>
          <Image
            src={photo.src}
            alt={photo.alt}
            rounded='sm'
            fallback={<Skeleton />}
          />
        </AspectRatio>
      </GridItem>
    )
  );
  return covers;
};

const PhotoCovers = (setSelectedIndex: Function) =>
  renderPhotoCovers(setSelectedIndex);

export default PhotoCovers;
