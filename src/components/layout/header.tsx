import LanguagesButton from '@/components/languages-button';
import ThemeButton from '@/components/theme-button';
import { Text, HStack, VStack } from '@chakra-ui/react';

const Header = () => {
  return (
    <VStack>
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
      <HStack
        as='header'
        position='fixed'
        top='6'
        p={8}
        zIndex='tooltip'
        justify='space-between'
        align='center'
        w='100%'
      >
        <ThemeButton />
        <LanguagesButton />
      </HStack>
    </VStack>
  );
};

export default Header;
