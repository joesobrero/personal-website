import PageLayout from '@/components/page-layout';
import { ART } from '../data/art';
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

const DELAY = 0.4;

const fullImageMotionVariants: Variants = {
  initial: {
    // opacity: 0,
  },
  animate: {
    // opacity: 1,
  },
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
  bgColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(8px)',
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

const renderArt = (setSelectedIndex: Function) => {
  let art = [];
  ART.forEach((photo, index) =>
    art.push(
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
          <Image src={photo.src} alt={photo.alt} rounded='sm' />
        </AspectRatio>
      </GridItem>
    )
  );
  return art;
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
        initial='initial'
        animate='animate'
        exit='exit'
        onClick={() => setSelectedIndex(null)}
        sx={fullImageStyles}
      >
        <Image
          position='absolute'
          transform={'translateY(-50%)'}
          top={'50%'}
          w='80%'
          h='80%'
          fit='contain'
          as={motion.img}
          zIndex='popover'
          src={ART[selectedIndex].src}
          alt={ART[selectedIndex].alt}
        />
        <VStack
          w='full'
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
            {ART[selectedIndex].title}
          </Heading>
          <HStack as={motion.div}>
            <Text as={motion.p} variant='caption'>
              {ART[selectedIndex].year}
            </Text>
          </HStack>
        </VStack>
      </VStack>
    )}
  </AnimatePresence>
);

const Art = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <PageLayout
      title='Joe Sobrero Portfolio'
      description='Showcase of product design and web development experience.'
    >
      <Grid templateColumns='repeat(3, 1fr)' gap={6} p={24} w='100vw'>
        {renderArt(setSelectedIndex)}
      </Grid>
      {console.log(selectedIndex)}
      {renderFullImage(selectedIndex, setSelectedIndex)}
    </PageLayout>
  );
};

const MotionPhotography = motion(Art);

export default Art;
