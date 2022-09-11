import { VStack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { FRAME_SIZE } from 'src/constants';

const RightPanel = () => (
  <VStack
    position='fixed'
    top={`calc(${FRAME_SIZE} - 1px)`}
    right={0}
    w={FRAME_SIZE}
    h={`calc(100vh - ${FRAME_SIZE} + 1px)`}
    border={mode('1px solid black', '1px solid white')}
    justify='end'
  />
);

export default RightPanel;
