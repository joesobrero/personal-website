import ThemeButton from '@/components/theme-button';
import {
  Image,
  Text,
  HStack,
  VStack,
  AspectRatio,
  useColorModeValue as mode,
  Link,
} from '@chakra-ui/react';
import { LOGO_IMG } from 'src/constants';

const Header = () => (
  <VStack>
    {/* banner */}
    <HStack bgColor='red.50' w='full' align='center' justify='center' h={10}>
      <Text
        fontWeight='bold'
        color='red'
        letterSpacing={8}
        textTransform='uppercase'
        fontSize='xl'
      >
        Site under maintenance
      </Text>
    </HStack>
    {/* nav */}
    <HStack
      as='header'
      position='fixed'
      zIndex='tooltip'
      top={8}
      pl={6}
      pr={0}
      border={mode('1px solid black', '1px solid white')}
      justify='space-between'
      align='center'
      w='100%'
    >
      <Link href='/'>
        <Image
          h='48px'
          src={mode(LOGO_IMG.lightModeSrc, LOGO_IMG.darkModeSrc)}
          alt='Joe Sobrero logo'
        />
      </Link>
      <ThemeButton />
    </HStack>
  </VStack>
);

export default Header;
