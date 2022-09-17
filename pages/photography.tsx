import PageLayout from '@/components/page-layout';
import { PHOTOGRAPHY } from '../data/photos';
import {
  useColorModeValue as mode,
  Image,
  AspectRatio,
  Grid,
  Text,
  GridItem,
  VStack,
  Heading,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { FADE_IN_DURATION } from 'src/constants';
import { useState } from 'react';
import { BsPinMapFill } from 'react-icons/bs';

const DELAY = 0.4;

const fullImageMotionVariants: Variants = {
  initial: {},
  animate: {},
  exit: {},
};

const fullImageStyles = {
  position: 'fixed',
  top: '3rem',
  left: '3rem',
  h: `calc(100vh - 6rem)`,
  w: `calc(100vw - 6rem)`,
  overflow: 'hidden',
  cursor: 'zoom-out',
};

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
    scale: 0.8,
    opacity: 0,
  },
  hover: {
    boxShadow:
      // '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      '0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    scale: 1.005,
    transition: { delay: 0, duration: 0.5 },
  },
};

const renderPhotos = (setSelectedIndex: Function) => {
  let photos = [];
  PHOTOGRAPHY.forEach((photo, index) =>
    photos.push(
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
        <AspectRatio ratio={1.618} >
          <Image src={photo.src} alt={photo.alt} rounded='sm'/>
        </AspectRatio>
      </GridItem>
    )
  );
  return photos;
};

const renderFullImage = (selectedIndex: number, setSelectedIndex: Function) => (
  <AnimatePresence>
    {typeof selectedIndex == 'number' && (
      <VStack
        layout
        layoutId={'photo' + selectedIndex}
        key={'photo' + selectedIndex}
        as={motion.div}
        transition={{ type: 'spring' }}
        variants={fullImageMotionVariants}
        align='start'
        initial='initial'
        animate='animate'
        exit='exit'
        onClick={() => setSelectedIndex(null)}
        sx={fullImageStyles}
      >
        <Image
          fit='cover'
          w='full'
          h='full'
          as={motion.img}
          zIndex='popover'
          src={PHOTOGRAPHY[selectedIndex].src}
          alt={PHOTOGRAPHY[selectedIndex].alt}
        />
        <VStack
          as={motion.div}
          position='absolute'
          bottom={-2}
          zIndex={9999}
          color='white'
          align='start'
          p={12}
          opacity={0.5}
        >
          <Heading as={motion.h3} variant='subtitle'>
            {PHOTOGRAPHY[selectedIndex].title}
          </Heading>
          <HStack as={motion.div}>
            <Icon as={BsPinMapFill} />
            <Text as={motion.p} variant='caption'>
              {PHOTOGRAPHY[selectedIndex].location}
            </Text>
          </HStack>
        </VStack>
      </VStack>
    )}
  </AnimatePresence>
);

const Photography = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <PageLayout
      title='Joe Sobrero Portfolio'
      description='Showcase of product design and web development experience.'
    >
      <Grid templateColumns='repeat(3, 1fr)' gap={6} p={24} w='100vw'>
        {renderPhotos(setSelectedIndex)}
      </Grid>
      {console.log(selectedIndex)}
      {renderFullImage(selectedIndex, setSelectedIndex)}
    </PageLayout>
  );
};

const MotionPhotography = motion(Photography);

export default Photography;
