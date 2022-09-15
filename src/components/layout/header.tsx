import ThemeButton from '@/components/theme-button';
import {
  Image,
  HStack,
  VStack,
  useColorModeValue as mode,
  Link,
  Button,
} from '@chakra-ui/react';
import { FRAME_SIZE, LOGO_IMG } from 'src/constants';

const buttonStyles = {
  h: `calc(${FRAME_SIZE} - 2px)`,
  px: 4,
  borderRadius: 0,
  bgColor: 'transparent',
  textTransform: 'lowercase',
};

const buttons = ['design', 'art', 'photography', 'contact'];

const Header = () => (
  <HStack
    bgColor={mode('white', 'gray.950')}
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
        ml={1}
        h={FRAME_SIZE}
        src={mode(LOGO_IMG.lightModeSrc, LOGO_IMG.darkModeSrc)}
        alt='Joe Sobrero logo'
      />
    </Link>
    <HStack>
      <HStack spacing={0}>
        {buttons.map((button) => (
          <Button
            key={button}
            sx={buttonStyles}
            as={Link}
            px={1}
            href={'/' + button}
            _hover={{
              bgColor: mode('blackAlpha.100', 'whiteAlpha.100'),
              textDecoration: 'none',
            }}
            _active={{
              bgColor: mode('blackAlpha.200', 'whiteAlpha.200'),
              textDecoration: 'none',
            }}
          >
            {button}
          </Button>
        ))}
      </HStack>
      <ThemeButton />
    </HStack>
  </HStack>
);

export default Header;
