import PageLayout from '@/components/page-layout';
import { PHOTOGRAPHY, PhotographyImg } from '../data/photos';
import { Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Photo from '@/components/photography/photo';

const renderPhotos = () => {
  let photos = [];
  PHOTOGRAPHY.forEach((photo, index) => photos.push(Photo(photo, index)));
  return photos;
};

const Photography = () => (
  <PageLayout
    title='Joe Sobrero Portfolio'
    description='Showcase of product design and web development experience.'
  >
    <Grid templateColumns='repeat(3, 1fr)' gap={6} p={24} w='100vw'>
      {renderPhotos()}
    </Grid>
  </PageLayout>
);

const MotionPhotography = motion(Photography);

export default Photography;
