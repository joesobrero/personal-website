import PageLayout from '@/components/page-layout';
import {
  Link,
  VStack,
  useColorModeValue as mode,
  HStack,
  Button,
  Stack,
  ButtonGroup,
} from '@chakra-ui/react';
import { animate, motion, useMotionValue, Variants } from 'framer-motion';
import { FRAME_SIZE } from 'src/constants';
import BlocImages from '@/components/index/bloc-images';
import BlocRotation from '@/components/index/bloc-ratation';

const menuItemsMotion: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1],
    transition: { delay: 0, duration: 2 },
  },
  exit: {
    opacity: 0,
  },
};

const Menu = () => (
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
    <Button as={Link} href='/design' mb={[2, 2, 0]}>
      Design
    </Button>
    <Button as={Link} href='/art' mb={[2, 2, 0]}>
      Art
    </Button>
    <Button as={Link} href='/photography' mb={[2, 2, 0]}>
      Photography
    </Button>
  </ButtonGroup>
);

const IndexPage = () => (
  <PageLayout
    title='Joe Sobrero Portfolio'
    description='Showcase of product design and web development experience.'
  >
    <VStack
      m={FRAME_SIZE}
      p={`calc(${FRAME_SIZE}*2)`}
      w='full'
      h={`calc(100vh - ${FRAME_SIZE}*2)`}
      justify='center'
    >
      {/* <BlocImages /> */}
      <BlocRotation />
      {Menu()}
    </VStack>
  </PageLayout>
);

export default IndexPage;
