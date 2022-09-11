import ThemeButton from '@/components/theme-button';
import {
  Image,
  Text,
  HStack,
  VStack,
  useColorModeValue as mode,
  Link,
} from '@chakra-ui/react';
import { FRAME_SIZE, LOGO_IMG } from 'src/constants';

const Header = () => (
  <VStack>
    {/* nav */}
    <HStack
      as='header'
      position='fixed'
      zIndex='tooltip'
      top={0}
      pl={FRAME_SIZE + 2}
      pr={0}
      border={mode('1px solid black', '1px solid white')}
      justify='space-between'
      align='center'
      h={FRAME_SIZE}
      w='100%'
    >
      <Link href='/'>
        <Image
          h={FRAME_SIZE}
          src={mode(LOGO_IMG.lightModeSrc, LOGO_IMG.darkModeSrc)}
          alt='Joe Sobrero logo'
        />
      </Link>
      <ThemeButton />
    </HStack>
  </VStack>
);

export default Header;
