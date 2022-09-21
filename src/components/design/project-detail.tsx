import { PROJECTS } from '@/data/design';
import {
  Text,
  HStack,
  Heading,
  Image,
  VStack,
  Skeleton,
  Button,
  Link,
  Badge,
} from '@chakra-ui/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { BsArrowUpRight, BsArrowUpRightSquare } from 'react-icons/bs';

const containerMotionVariants: Variants = {
  initial: {},
  animate: {},
  exit: {},
};

const fullWidthContainer = {
  position: 'fixed',
  top: '3rem',
  left: '3rem',
  h: `calc(100vh - 6rem)`,
  w: `calc(100vw - 6rem)`,
  overflow: 'hidden',
  cursor: 'zoom-out',
  bgColor: 'white',
  backdropFilter: 'blur(8px)',
};

const CoverImage = (index: number) => (
  <Image
    fit='contain'
    as={motion.img}
    zIndex='popover'
    src={PROJECTS[index].cover.src}
    alt={PROJECTS[index].cover.alt}
    fallback={<Skeleton />}
  />
);

const Description = (index: number) => (
  <VStack as={motion.div} align='start' spacing={8} w='full'>
    <Heading as={motion.h3} variant='subtitle'>
      {PROJECTS[index].name}
    </Heading>
    <VStack spacing={3} w='full' align='start'>
      <Heading as={motion.h4} variant='subheading'>
        {PROJECTS[index].summary}
      </Heading>
      <Text as={motion.p} variant='caption'>
        Summary
      </Text>
    </VStack>
    <VStack spacing={3} w='full' align='start'>
      <HStack as={motion.div} wrap={'wrap'} spacing={4}>
        {PROJECTS[index].skills.map((skill) => (
          <Badge as={motion.span} variant={'solid'}>
            {skill}
          </Badge>
        ))}
      </HStack>
      <Text as={motion.p} variant='caption'>
        Skills
      </Text>
    </VStack>
  </VStack>
);

const WorkSamples = (index: number) => (
  <VStack spacing={32} pt={24}>
    {PROJECTS[index].images.map((sample) => (
      <VStack align={'start'}>
        <Heading>{sample.title}</Heading>
        <Image src={sample.src} alt={sample.alt} fallback={<Skeleton />} />
        <Text>{sample.caption}</Text>
        {sample.link && (
          <Button
            as={Link}
            variant={'link'}
            href={sample.link.href}
            size='sm'
            rightIcon={<BsArrowUpRightSquare />}
          >
            {sample.link.label}
          </Button>
        )}
      </VStack>
    ))}
  </VStack>
);

const ProjectDetail = (selectedIndex: number, setSelectedIndex: Function) => (
  <AnimatePresence>
    {typeof selectedIndex == 'number' && (
      <VStack
        layout
        layoutId={'photo' + selectedIndex}
        key={'photo' + selectedIndex}
        as={motion.div}
        transition={{ type: 'spring' }}
        variants={containerMotionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        onClick={() => setSelectedIndex(null)}
        sx={fullWidthContainer}
      >
        <VStack overflow='scroll' w='full'>
          <VStack maxW={'1000px'} w={'80vw'} pt={12} pb={24} spacing={12}>
            {CoverImage(selectedIndex)}
            {Description(selectedIndex)}
            {WorkSamples(selectedIndex)}
          </VStack>
        </VStack>
      </VStack>
    )}
  </AnimatePresence>
);

export default ProjectDetail;
