import ExternalLink from '@/components/external-link';
import PageLayout from '@/components/page-layout';
import {
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Trans, useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';
import { ImSphere } from 'react-icons/im';
import { GITHUB_PROFILE } from 'src/constants';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      title='Home'
      description='Discover a starter kit which includes Next.js, Chakra-UI, Framer-Motion in Typescript. You have few components, Internationalization, SEO and more in this template ! Enjoy coding.'
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
          <Heading as='h1'>Joe Sobrero</Heading>
          <Divider />
          <Text color='gray.500' align='justify'>
            <Trans i18nKey='bio'></Trans>
          </Text>
        </VStack>
      </Stack>
    </PageLayout>
  );
};

export default IndexPage;
