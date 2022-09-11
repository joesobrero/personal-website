import {
  HStack,
  IconButton,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FRAME_SIZE } from 'src/constants';

const Footer = () => (
  <HStack
    position='absolute'
    bottom={0}
    left={`calc(${FRAME_SIZE} - 1px)`}
    w={`calc(100vw - (${FRAME_SIZE}*2) + 2px)`}
    height={FRAME_SIZE}
    border={mode('1px solid black', '1px solid white')}
    justify='end'
  >
    <HStack bgColor={mode('black', 'white')} h={FRAME_SIZE} px={2}>
      <IconButton
        color={mode('white', 'black')}
        variant='ghost'
        aria-label={'view instagram'}
        icon={<BsInstagram />}
        borderRadius='0'
      />
      <IconButton
        color={mode('white', 'black')}
        variant='ghost'
        aria-label={'view linkedin'}
        icon={<BsLinkedin />}
        borderRadius='0'
      />
      <IconButton
        color={mode('white', 'black')}
        variant='ghost'
        aria-label={'view github'}
        icon={<BsGithub />}
        borderRadius='0'
      />
    </HStack>
  </HStack>
);

export default Footer;
