import { toolSections } from '@/data/data';
import {
  Image,
  Divider,
  Heading,
  Link,
  VStack,
  Skeleton,
  HStack,
  useColorModeValue as mode,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { FADE_IN_DURATION } from 'src/constants';

const motionVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: FADE_IN_DURATION, delay: 0.6 },
  },
  exit: {
    opacity: 0,
  },
};

const toolSection = (section) => (
  <VStack key={section.title} align='start' spacing={4}>
    <Heading variant='caption'>{section.title}</Heading>
    <Grid
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={4}
    >
      {section.images.map((image) => (
        <GridItem key={image.alt}>
          <Link href={image.href} target={'_blank'}>
            <Image
              _hover={{ opacity: 0.5 }}
              src={mode(image.lightModeSrc, image.darkModeSrc)}
              boxSize='35px'
              fallback={<Skeleton boxSize='35px' />}
            />
          </Link>
        </GridItem>
      ))}
    </Grid>
  </VStack>
);

const Tools = () => (
  <VStack
    align='start'
    w='full'
    zIndex={'docked'}
    as={motion.section}
    initial='initial'
    animate='animate'
    exit='exit'
    variants={motionVariants}
  >
    <Heading mb={2} variant='heading'>
      Tools
    </Heading>
    <Divider />
    <HStack pt={2} spacing={8} align='start'>
      {toolSections.map((section) => toolSection(section))}
    </HStack>
  </VStack>
);

export default Tools;
