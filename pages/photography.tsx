import PageLayout from '@/components/page-layout';
import { Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PhotoCovers from '@/components/photography/photo-covers';
import PhotoDetail from '@/components/photography/photo-detail';

const Photography = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <PageLayout title='Photography' description='Showcase of photography'>
      <Grid templateColumns='repeat(3, 1fr)' gap={6} p={24} w='100vw'>
        {PhotoCovers(setSelectedIndex)}
      </Grid>
      {PhotoDetail(selectedIndex, setSelectedIndex)}
    </PageLayout>
  );
};

const MotionPhotography = motion(Photography);

export default Photography;
