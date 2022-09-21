import PageLayout from '@/components/page-layout';
import { Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ArtCovers from '@/components/art/art-covers';
import ArtDetail from '@/components/art/art-detail';

const Art = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <PageLayout
      title='Joe Sobrero Portfolio'
      description='Showcase of product design and web development experience.'
    >
      <Grid templateColumns='repeat(3, 1fr)' gap={6} p={24} w='100vw'>
        {ArtCovers(setSelectedIndex)}
      </Grid>
      {console.log(selectedIndex)}
      {ArtDetail(selectedIndex, setSelectedIndex)}
    </PageLayout>
  );
};

const MotionPhotography = motion(Art);

export default Art;
