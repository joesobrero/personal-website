import {
  VStack,
  Heading,
  Text,
  useColorModeValue as mode,
  HStack,
} from '@chakra-ui/react';

const Intro = () => (
  <HStack align='start'>
    <VStack w='full' align='start'>
      <Heading py={1} variant='title' as='h1' w='full'>
        Product Strategist
      </Heading>
      <Heading py={1} variant='title' as='h1' w='full'>
        Experience Designer
      </Heading>
      <Heading py={1} variant='title' as='h1' w='full'>
        Web Developer
      </Heading>
    </VStack>
    <HStack
      pl={4}
      pt={4}
      pr={8}
      pb={16}
      bgColor={mode('blackAlpha.100', 'whiteAlpha.100')}
    >
      <Text variant='mono'>(I design & build software startups)</Text>
    </HStack>
  </HStack>
);

export default Intro;
