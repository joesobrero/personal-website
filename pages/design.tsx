import PageLayout from '@/components/page-layout';
import { Divider, Heading, Stack, Text, VStack } from '@chakra-ui/react';

const IndexPage = () => (
  <PageLayout
    title='Design'
    description='Joe Sobrero product design and web development projects.'
  >
    <VStack
      spacing={4}
      h='100vh'
      w='100%'
      align={'center'}
      justify='center'
      p={12}
    >
      <VStack spacing={2} align='start' w={{ base: '100%', md: '50%' }}>
        <Heading as='h1'>WEBSITE UNDER CONSTRUCTION</Heading>
        <Divider />
        <Text color='gray.500' align='justify'>
          Check back soon :)
        </Text>
      </VStack>
    </VStack>
  </PageLayout>
);

export default IndexPage;
