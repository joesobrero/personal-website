import {
  useColorModeValue as mode,
  Text,
  Divider,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { FADE_IN_DURATION } from 'src/constants';

const motionVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: FADE_IN_DURATION, delay: 0.4 },
  },
  exit: {
    opacity: 0,
  },
};

const Education = () => (
  <VStack
    w='full'
    align='start'
    as={motion.section}
    initial='initial'
    animate='animate'
    exit='exit'
    variants={motionVariants}
  >
    <Heading pb={2} variant='heading'>
      Education
    </Heading>
    <Divider />
    <Heading py={2} variant='subheading' color={mode('#154734', '#BD8B13')}>
      California Polytechnic State University - San Luis Obispo
    </Heading>
    <HStack spacing={6}>
      <Text variant='body'>
        Graphic Communication
        <span style={{ marginLeft: '6px', opacity: '0.5' }}>(B.S.)</span>
      </Text>
      <Text variant='body'>
        Philosophy
        <span style={{ marginLeft: '6px', opacity: '0.5' }}>(minor)</span>
      </Text>
      <Text variant='body'>
        Computer Science
        <span style={{ marginLeft: '6px', opacity: '0.5' }}>(minor)</span>
      </Text>
    </HStack>
  </VStack>
);

export default Education;
