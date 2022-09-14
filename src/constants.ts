export const getCloudImgPath = (file: string) =>
  'https://res.cloudinary.com/dl7p14ddo/image/upload/v1662775062/personal-website/' +
  file;

export const GITHUB_PROFILE = 'https://www.github.com/joesobrero';
export const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/josephsobrero';
export const INSTAGRAM_PROFILE = 'https://www.instagram.com/sloppy.joe.climbs';
export const LOGO_IMG = {
  lightModeSrc: getCloudImgPath('logo_yx1kkc.svg'),
  darkModeSrc: getCloudImgPath('logo-white_xvadpz.svg'),
  alt: 'Joe Sobrero personal logo',
};

export const FRAME_SIZE = '3rem';

export const PORTRAIT = {
  src: getCloudImgPath('portrait_njeo1e.png'),
  alt: 'Joseph Sobrero black and white portrait',
};

export const FADE_IN_DURATION = 0.4;
