import {
  useColorModeValue as mode,
  Text,
  Divider,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react';

const Education = () => (
  <VStack w='full' align='start'>
    <Heading pb={2} variant='heading'>
      Education
    </Heading>
    <Divider />
    {/* color={mode('#154734', '#BD8B13')}> */}
    <Heading py={2} variant='subheading' color='#BD8B13'>
      California Polytechnic State University - San Luis Obispo
    </Heading>
    <HStack spacing={6}>
      <Text variant='body'>
        Graphic Communication
        <span style={{ marginLeft: '6px', opacity: '0.5' }}>(B.S.)</span>
      </Text>
      <Text variant='body'>
        Philosophy
        <span style={{ marginLeft: '6px', opacity: '0.5' }}>(minor)</span>
      </Text>
      <Text variant='body'>
        Computer Science
        <span style={{ marginLeft: '6px', opacity: '0.5' }}>(minor)</span>
      </Text>
    </HStack>
  </VStack>
);

export default Education;
