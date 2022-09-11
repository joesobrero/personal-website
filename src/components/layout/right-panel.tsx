import { VStack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { FRAME_SIZE } from 'src/constants';

const RightPanel = () => (
  <VStack
    position='fixed'
    top={0}
    right={0}
    w={FRAME_SIZE}
    h={'100vh'}
    border={mode('1px solid black', '1px solid white')}
    justify='end'
  />
);

export default RightPanel;
