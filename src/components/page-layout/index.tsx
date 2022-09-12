import { Container, ContainerProps } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -0,
    y: 40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
};

type PageProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

const MotionContainer = motion<ContainerProps>(Container);

const PageLayout = ({ title, description, children }: PageProps) => {
  return (
    <>
      <NextSeo
        title={title + ' | Joe Sobrero'}
        description={description}
        twitter={{
          cardType: 'summary_large_image',
          handle: '',
        }}
        openGraph={{
          url: 'https://www.joesobrero.com',
          title: title + ' | Joe Sobrero',
          description: description,
          locale: 'en_US',
          images: [
            {
              url: 'https://res.cloudinary.com/dl7p14ddo/image/upload/v1662594600/personal-website/og/og-preview_vbhcvc.jpg',
              width: 1200,
              height: 630,
              alt: 'Joe Sobrero',
              type: 'image/jpg',
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://www.joesobrero.com/favicon.ico',
          },
        ]}
      />
      <MotionContainer
        display='flex'
        maxW='container.lg'
        minH='100vh'
        p={0}
        m={0}
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
      >
        {children}
      </MotionContainer>
    </>
  );
};

export default PageLayout;
