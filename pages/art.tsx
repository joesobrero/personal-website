import PageLayout from '@/components/page-layout';
import { Divider, Heading, Stack, Text, VStack } from '@chakra-ui/react';

const IndexPage = () => (
  <PageLayout
    title='Art'
    description='Showcase of product design and web development experience.'
  >
    <Stack
      spacing={4}
      p={12}
      align='center'
      justify={'center'}
      h='100vh'
      w='100%'
    >
      <VStack
        spacing={2}
        align='start'
        w={{ base: '100%', md: '50%' }}
        py={{ base: 20, md: 0 }}
      >
        <Heading as='h1'>WEBSITE UNDER CONSTRUCTION</Heading>
        <Divider />
        <Text color='gray.500' align='justify'>
          Check back soon :)
        </Text>
      </VStack>
    </Stack>
  </PageLayout>
);

export default IndexPage;
