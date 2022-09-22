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
  AspectRatio,
  Divider,
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
  <AspectRatio ratio={4} w='full'>
    <Image
      fit='contain'
      as={motion.img}
      zIndex='popover'
      src={PROJECTS[index].cover.src}
      alt={PROJECTS[index].cover.alt}
      fallback={<Skeleton />}
    />
  </AspectRatio>
);

const Description = (index: number) => (
  <VStack as={motion.div} align='start' spacing={8} w='full'>
    <Heading as={motion.h3} variant='subtitle'>
      {PROJECTS[index].name}
    </Heading>
    <VStack spacing={4} w='full' align='start'>
      <Heading as={motion.h4} variant='subheading'>
        {PROJECTS[index].summary}
      </Heading>
      <HStack as={motion.div} wrap={'wrap'} spacing={3}>
        {PROJECTS[index].skills.map((skill) => (
          <Badge
            ml={0}
            // mr={4}
            as={motion.span}
            sx={{ marginInlineStart: '0 !important' }}
            mr={'2 !important'}
            mb={'2 !important'}
            variant={'outline'}
          >
            {skill}
          </Badge>
        ))}
      </HStack>
    </VStack>
  </VStack>
);

const WorkSamples = (index: number) => (
  <VStack spacing={32} pt={24}>
    {PROJECTS[index].images.map((sample) => (
      <VStack align={'start'} key={sample.src.slice(15)}>
        <Heading variant='heading' color='black' mb={4}>
          {sample.title}
        </Heading>

        {sample.title && <Divider />}

        {sample.src.search('.mp4') != -1 ? (
          // <AspectRatio ratio={2}>
          <video loop autoPlay>
            <source src={sample.src} type='video/mp4' />
            {/* <source src="" type="video/ogg"> */}
            Your browser does not support the video tag.
          </video>
        ) : (
          // </AspectRatio>
          <Image src={sample.src} alt={sample.alt} fallback={<Skeleton />} />
        )}

        <Text variant='caption' color='blackAlpha.500'>
          {sample.caption}
        </Text>

        {sample.link && (
          <Button
            as={Link}
            variant={'link'}
            href={sample.link.href}
            size='sm'
            rightIcon={<BsArrowUpRightSquare />}
            color='blue.500'
            target='_blank'
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
          {CoverImage(selectedIndex)}
          <VStack maxW={'1000px'} w={'80vw'} pt={12} pb={24} spacing={12}>
            {Description(selectedIndex)}
            {WorkSamples(selectedIndex)}
          </VStack>
        </VStack>
      </VStack>
    )}
  </AnimatePresence>
);

export default ProjectDetail;
