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
      <Box as='main'>{children}</Box>
      <LeftPanel />
      <RightPanel />
      <Footer />
    </>
  );
};

export default Layout;
