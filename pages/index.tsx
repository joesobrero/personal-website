import PageLayout from '@/components/page-layout';
import { Divider, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { Trans, useTranslation } from 'react-i18next';
import { GITHUB_PROFILE } from 'src/constants';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      title='Joe Sobrero Portfolio'
      description='Showcase of product design and web development experience.'
    >
      <Stack
        spacing={4}
        py={12}
        align='center'
        h='100vh'
        w='100%'
        direction={{ base: 'column', md: 'row' }}
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
};

export default IndexPage;
