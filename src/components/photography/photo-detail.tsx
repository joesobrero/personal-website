import { PHOTOGRAPHY } from '@/data/photos';
import {
  Image,
  Text,
  VStack,
  Heading,
  HStack,
  Icon,
  Skeleton,
} from '@chakra-ui/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { BsPinMapFill } from 'react-icons/bs';

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

const PhotoDetail = (selectedIndex: number, setSelectedIndex: Function) => (
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
          fallback={<Skeleton />}
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

const MotionPhotography = motion(PhotoDetail);

export default PhotoDetail;
