import { toolSections } from '@/data/data';
import {
  Image,
  Divider,
  Heading,
  Link,
  VStack,
  Skeleton,
  HStack,
  useColorModeValue as mode,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const toolSection = (section) => (
  <VStack key={section.title} align='start' spacing={4}>
    <Heading variant='caption'>{section.title}</Heading>
    {/* <HStack maxW={`calc(105px + 4rem)`} wrap='wrap'> */}
    <Grid
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={4}
    >
      {section.images.map((image) => (
        <GridItem>
          <Link href={image.href} target={'_blank'}>
            <Image
              _hover={{ opacity: 0.5 }}
              src={mode(image.lightModeSrc, image.darkModeSrc)}
              boxSize='35px'
              fallback={<Skeleton boxSize='35px' />}
            />
          </Link>
        </GridItem>
      ))}
    </Grid>
  </VStack>
);

const Tools = () => (
  <VStack align='start' w='full' zIndex={'docked'}>
    <Heading mb={2} variant='heading'>
      Tools
    </Heading>
    <Divider />
    <HStack pt={2} spacing={8} align='start'>
      {toolSections.map((section) => toolSection(section))}
    </HStack>
  </VStack>
);

export default Tools;
