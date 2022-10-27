import Contact from '@/components/home/contact';
import Education from '@/components/home/education';
import Intro from '@/components/home/intro';
import Portrait from '@/components/home/portrait';
import Tools from '@/components/home/tools';
import PageLayout from '@/components/page-layout';
import { VStack, useColorModeValue as mode } from '@chakra-ui/react';
import { FRAME_SIZE } from 'src/constants';

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
    >
      <VStack align='start' spacing={24}>
        <Intro />
        <Education />
        <Tools />
        <Contact />
      </VStack>
    </VStack>
    <Portrait />
  </PageLayout>
);

export default IndexPage;
