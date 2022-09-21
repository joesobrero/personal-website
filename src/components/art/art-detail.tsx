import {
  Image,
  Text,
  VStack,
  Heading,
  HStack,
  Skeleton,
} from '@chakra-ui/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { ART } from '@/data/art';

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
  bgColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(8px)',
};

const ArtDetail = (selectedIndex: number, setSelectedIndex: Function) => (
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
          fallback={<Skeleton />}
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

const MotionPhotography = motion(ArtDetail);

export default ArtDetail;
