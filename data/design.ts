import { getCloudImgPath } from 'src/constants';

const getWorkPath = (srcName: string) => getCloudImgPath('work/' + srcName);

// TYPES

type ProjectCoverImage = {
  src: string;
  alt: string;
};

type WorkImg = {
  title: string;
  src: string;
  caption: string;
  alt: string;
  link?: {
    label: string;
    href: string;
  };
};

type Project = {
  name: string;
  role: string;
  summary: string;
  skills: string[];
  cover: ProjectCoverImage;
  images: WorkImg[];
};

// OBJECTS

const Ropegun: Project = {
  name: 'Ropegun',
  role: 'Founder & CEO',
  summary:
    'Won $10k grant, designed and developed native iOS app for tracking rock climbing activity and performance history. Participated in Cal Poly startup accelerator program.',
  skills: [
    'Product Development',
    'Design',
    'Entrepreneurship',
    'Leadership',
    'Public Speaking',
    'Logo Design',
    'Fundraising',
    'Marketing',
  ],
  cover: {
    src: getWorkPath('ropegun/ropegun_plopna.jpg'),
    alt: 'Ropegun project samples cover',
  },
  images: [],
};

const Resource: Project = {
  name: 'ReSource',
  summary:
    '8th member, Lead Designer, and later Head of Product of ReSource, a mutual credit crypto startup' +
    'Designed countless pitch decks, a marketplace web app, an admin web app, a staking web app, our logos, our token glyfs, many websites, swag, branding, and more.',
  cover: {
    src: getWorkPath('resource/cover_stiyfc.jpg'),
    alt: 'ReSource project samples cover',
  },
  images: [],
};

const Bract: Project = {
  name: 'Bract Company',
  role: 'Founder & CMO',
  summary:
    'Created sustainable hemp apparel startup and raised $8k+ through Kickstarter campaign.',
  skills: [
    'Crowdfunding',
    'Business Development',
    'Logo Design',
    'Brand Creation',
    'Marketing',
    'UX/UI Design',
    'Web Development',
    'Product Photography',
    'Lifestyle Photography',
    'Video Capture and Editing',
  ],
  cover: {
    src: getWorkPath('bract/cover_cfuajn.jpg'),
    alt: 'Bract project samples cover',
  },
  images: [
    {
      title: 'Website',
      src: getWorkPath('bract/website-screens_y9oqxf'),
      alt: 'bract website screenshots',
      caption:
        'Screenshots from our responsive website developed HTML, CSS, and JavaScript/JQuery (it was 2015).',
    },
    {
      title: 'Kickstarter',
      src: getWorkPath('bract/kickstarter-screens_itxeis'),
      alt: 'screenshots from bract company successful kickstarter campaign',
      caption: 'Kickstarter page screenshots',
      link: {
        label: 'View on Kickstarter',
        href: 'https://www.kickstarter.com/projects/1687612862/the-pioneer-collection?ref=nav_search&result=project&term=bract',
      },
    },
  ],
};

const GrowNodes: Project = {
  name: 'Grow Nodes',
  role: 'Founder & Designer',
  summary:
    "Won first place and crowd favorite at Cal Poly's 2016 Startup Weekend. I was the only designer on the team.",
  skills: ['UX/UI', 'Prototyping', 'Pitch Deck Design'],
  cover: {
    src: getWorkPath('grow-nodes/cover_uytiq7.jpg'),
    alt: 'Grow Nodes project samples cover',
  },
  images: [],
};

export const PROJECTS: Project[] = [Ropegun, Resource, Bract, GrowNodes];
