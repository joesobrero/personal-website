import {
  HStack,
  IconButton,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FRAME_SIZE } from 'src/constants';

const iconButtonStyle = {
  color: 'white',
  bgColor: 'brand.primary',
  w: `calc(${FRAME_SIZE} - 2px)`,
  h: `calc(${FRAME_SIZE} - 2px)`,
  variant: 'ghost',
  borderRadius: '0',
  _hover: { bgColor: 'whiteAlpha.100' },
};

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
      <IconButton
        sx={iconButtonStyle}
        aria-label={'view instagram'}
        icon={<BsInstagram />}
      />
      <IconButton
        sx={iconButtonStyle}
        aria-label={'view linkedin'}
        icon={<BsLinkedin />}
      />
      <IconButton
        sx={iconButtonStyle}
        variant='ghost'
        aria-label={'view github'}
        icon={<BsGithub />}
      />
    </HStack>
  </HStack>
);

export default Footer;
