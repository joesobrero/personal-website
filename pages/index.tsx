import PageLayout from '@/components/page-layout';
import {
  Link,
  VStack,
  useColorModeValue as mode,
  HStack,
  Button,
  Stack,
  ButtonGroup,
  Box,
} from '@chakra-ui/react';
import { animate, motion, useMotionValue, Variants } from 'framer-motion';
import { FRAME_SIZE } from 'src/constants';
import BlocRotation from '@/components/index/bloc-ratation';
import { useState } from 'react';

const menuItemsMotion: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1],
    transition: { delay: 3, duration: 2 },
  },
  exit: {
    opacity: 0,
  },
};

const contentMotion: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1],
    transition: { delay: 0.5, duration: 3 },
  },
};

const overlayMotion: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1],
    transition: { delay: 2.5, duration: 1 },
  },
};

const Menu = (setHover: Function) => (
  <ButtonGroup
    as={motion.div}
    initial='initial'
    animate='animate'
    exit='exit'
    variants={menuItemsMotion}
    spacing={[0, 0, 4]}
    size={['lg', 'lg', 'md']}
    display='flex'
    flexDirection={['column', 'column', 'row']}
    variant={['solid', 'solid', 'link']}
  >
    <Button
      as={Link}
      href='/design'
      mb={[2, 2, 0]}
      onMouseEnter={() => setHover('design')}
      onMouseLeave={() => setHover(null)}
    >
      Design
    </Button>
    <Button
      as={Link}
      href='/art'
      mb={[2, 2, 0]}
      onMouseEnter={() => setHover('art')}
      onMouseLeave={() => setHover(null)}
    >
      Art
    </Button>
    <Button
      as={Link}
      href='/photography'
      mb={[2, 2, 0]}
      onMouseEnter={() => setHover('photography')}
      onMouseLeave={() => setHover(null)}
    >
      Photography
    </Button>
  </ButtonGroup>
);

const getBgImage = (hover) => {
  switch (hover) {
    case null:
      return 'transparent';
    case 'art':
      return 'url(https://res.cloudinary.com/dl7p14ddo/image/upload/v1663378490/personal-website/art/daytime-disco_h5nzvv.jpg)';
    case 'photography':
      return 'url(https://res.cloudinary.com/dl7p14ddo/image/upload/v1663211907/personal-website/photography/jumping-cactus-in-snow_fqq1v2.jpg)';
    case 'design':
      return 'url(https://res.cloudinary.com/dl7p14ddo/image/upload/v1664417394/personal-website/work/resource/design-system-widgets_xgbllf.jpg)';
    default:
      return 'transparent';
  }
};

const IndexPage = () => {
  const [hover, setHover] = useState(null);

  return (
    <PageLayout
      title='Joe Sobrero Portfolio'
      description='Showcase of product design and web development experience.'
    >
      <VStack
        as={motion.div}
        m={FRAME_SIZE}
        p={`calc(${FRAME_SIZE}*2)`}
        w='full'
        h={`calc(100vh - ${FRAME_SIZE}*2)`}
        justify='center'
        variants={contentMotion}
        initial='initial'
        animate='animate'
        exit='exit'
        bgImg={getBgImage(hover)}
        bgSize='cover'
        // _before={{ bgColor: 'white' }}
      >
        <Box
          as={motion.div}
          variants={overlayMotion}
          initial='initial'
          animate='animate'
          exit='exit'
          position='absolute'
          bgColor='whiteAlpha.700'
          w='full'
          h='full'
        />
        <BlocRotation />
        {Menu(setHover)}
      </VStack>
    </PageLayout>
  );
};

export default IndexPage;
