import PageLayout from '@/components/page-layout';
import { Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCover from '@/components/design/project-covers';
import ProjectDetail from '@/components/design/project-detail';

const Design = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <PageLayout
      title='Design'
      description='Showcase of product design and web development experience.'
    >
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ]}
        gap={6}
        p={24}
        w='100vw'
      >
        {ProjectCover(setSelectedIndex)}
      </Grid>
      {console.log(selectedIndex)}
      {ProjectDetail(selectedIndex, setSelectedIndex)}
    </PageLayout>
  );
};

const MotionDesign = motion(Design);

export default Design;
