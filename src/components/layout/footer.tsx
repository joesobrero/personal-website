import {
  HStack,
  Link,
  IconButton,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import {
  FRAME_SIZE,
  GITHUB_PROFILE,
  INSTAGRAM_PROFILE,
  LINKEDIN_PROFILE,
} from 'src/constants';

const iconButtonStyle = {
  color: 'white',
  bgColor: 'brand.primary',
  w: `calc(${FRAME_SIZE} - 2px)`,
  h: `calc(${FRAME_SIZE} - 2px)`,
  variant: 'ghost',
  borderRadius: '0',
  _hover: { bgColor: 'whiteAlpha.100' },
};

const buttons = [
  { title: 'instagram', href: INSTAGRAM_PROFILE, icon: <BsInstagram /> },
  { title: 'linkedin', href: LINKEDIN_PROFILE, icon: <BsLinkedin /> },
  { title: 'github', href: GITHUB_PROFILE, icon: <BsGithub /> },
];

const Footer = () => (
  <HStack
    position='absolute'
    bottom={0}
    left={`calc(${FRAME_SIZE} - 1px)`}
    w={`calc(100vw - (${FRAME_SIZE}*2) + 2px)`}
    height={FRAME_SIZE}
    border={mode('1px solid black', '1px solid white')}
    borderRight='none'
    justify='end'
  >
    <HStack
      h={FRAME_SIZE}
      // px={2}
      spacing={0}
      bgColor='brand.primary'
      border={mode('1px solid black', '1px solid white')}
    >
      {buttons.map((button) => (
        <IconButton
          key={button.title}
          as={Link}
          target='_blank'
          sx={iconButtonStyle}
          aria-label={'view ' + button.title}
          href={button.href}
          icon={button.icon}
        />
      ))}
    </HStack>
  </HStack>
);

export default Footer;
