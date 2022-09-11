import { VStack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { FRAME_SIZE } from 'src/constants';

const LeftPanel = () => (
  <VStack
    position='fixed'
    top={`calc(${FRAME_SIZE} - 1px)`}
    left={0}
    w={FRAME_SIZE}
    h={`calc(100vh - ${FRAME_SIZE} + 2px)`}
    border={mode('1px solid black', '1px solid white')}
    justify='end'
  >
    <VStack
      py={6}
      border={mode('1px solid black', '1px solid white')}
      w={FRAME_SIZE}
    >
      <Text
        sx={{ 'writing-mode': 'vertical-lr' }}
        fontWeight='light'
        textTransform='uppercase'
        letterSpacing='2px'
        fontSize='sm'
        opacity={0.5}
      >
        product strategist, experience designer, web developer
      </Text>
    </VStack>
  </VStack>
);

export default LeftPanel;
