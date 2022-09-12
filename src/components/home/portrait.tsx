import { Image } from '@chakra-ui/react';
import { FRAME_SIZE, PORTRAIT } from 'src/constants';

const Portrait = () => (
  <Image
    position='absolute'
    zIndex={'base'}
    bottom={`calc(${FRAME_SIZE} - 1px)`}
    right={`calc(${FRAME_SIZE} - 1px)`}
    boxSize='350px'
    fit='cover'
    src={PORTRAIT.src}
    alt={PORTRAIT.alt}
  />
);

export default Portrait;
