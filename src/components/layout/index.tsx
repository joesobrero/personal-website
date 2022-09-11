import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';
import LeftPanel from './left-panel';
import RightPanel from './right-panel';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <LeftPanel />
      <Box as='main'>{children}</Box>
      <RightPanel />
      <Footer />
    </>
  );
};

export default Layout;
