import {
  useColorModeValue as mode,
  Link,
  Text,
  Divider,
  Heading,
  VStack,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { icons } from 'react-icons';
import { BsEnvelope, BsEnvelopeFill, BsLinkedin } from 'react-icons/bs';
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

const Contact = () => (
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
      Contact
    </Heading>
    <Divider />
    <ButtonGroup variant='link' spacing={6}>
      <Button
        as={Link}
        href='mailto:joesobrero@gmail.com'
        leftIcon={<BsEnvelopeFill />}
      >
        Email
      </Button>
      <Button
        as={Link}
        href='mailto:joesobrero@gmail.com'
        leftIcon={<BsLinkedin />}
      >
        LinkedIn
      </Button>
    </ButtonGroup>
  </VStack>
);

export default Contact;
