import { getCloudImgPath, getCloudVideoPath } from 'src/constants';

const getWorkPath = (srcName: string) => getCloudImgPath('work/' + srcName);
const getWorkVideoPath = (srcName: string) =>
  getCloudVideoPath('work/' + srcName);

// TYPES

type ProjectCoverImage = {
  src: string;
  alt: string;
};

type WorkImg = {
  title?: string;
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

const RopegunPhoneShots: WorkImg = {
  title: 'Mobile App',
  src: getWorkPath('ropegun/ropegun-demo-day-pitch-deck-1014_afqfv8.jpg'),
  caption: 'app preview from pitch deck',
  alt: 'ropegun climbing app preview images',
};
const RopegunVideo: WorkImg = {
  title: null,
  src: getWorkVideoPath('ropegun/ropegun-how-it-works-video_brus6v.mp4'),
  alt: 'ropegun climbing app how it works video',
  caption: 'Nate showing us how recording a climb works',
};
const RopegunLogo: WorkImg = {
  title: 'Logos',
  src: getWorkPath('ropegun/appIcon_1024px_hzlb96'),
  alt: 'ropegun logo',
  caption: 'Primary Logo',
};
const RopegunInverseLogo: WorkImg = {
  title: null,
  src: getWorkPath('ropegun/appIcon_1024_blrg9p'),
  alt: 'ropegun logo inverse',
  caption: 'secondary logo and app icon',
};
const RopegunLogoType: WorkImg = {
  title: null,
  src: getWorkPath('ropegun/ropegun-logo-type_p5guto'),
  alt: 'ropegun logo type',
  caption: 'logotype',
};
const RopegunStickers: WorkImg = {
  title: 'Marketing',
  src: getWorkPath('ropegun/IMG_1565_dththx'),
  alt: 'ropegun stickers',
  caption: 'stickers',
};
const RopegunBusinessCards: WorkImg = {
  title: null,
  src: getWorkPath('ropegun/IMG_1566_ovlfbr'),
  alt: 'ropegun',
  caption: 'business cards',
};
const RopegunTeam: WorkImg = {
  title: 'Demo Day',
  src: getWorkPath('ropegun/demo-day-03_tjn2m6'),
  caption: 'Nate and I at our table on demo day before the pitch',
  alt: 'Ropegun founders at demo day',
};
const RopegunBayTrip: WorkImg = {
  title: 'Cal Poly Startup Accelerator',
  src: getWorkPath('ropegun/bay-trip-3_c5qmey'),
  caption: 'Accelerator teams touring investing firms in the SF Bay',
  alt: 'cal poly slo accelerator teams touring investing firms in the SF Bay',
};
const RopegunBayTripGroup: WorkImg = {
  title: null,
  src: getWorkPath('ropegun/bay-trip-2_qegosj'),
  caption: 'meeting with successful cal poly entrepreneurs',
  alt: 'ropegun founders meeting with successful cal poly entrepreneurs',
};

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
  images: [
    RopegunPhoneShots,
    RopegunVideo,
    RopegunLogo,
    RopegunInverseLogo,
    RopegunLogoType,
    RopegunStickers,
    RopegunBusinessCards,
    RopegunTeam,
    RopegunBayTrip,
    RopegunBayTripGroup,
  ],
};

const ReSourceBizDeck: WorkImg = {
  title: null,
  src: getWorkPath('resource/biz-deck_s81dyp'),
  alt: 'ReSource business member pitch deck design',
  caption: 'Pitch deck for new SMBs to join the network',
};
const ReSourceDeck: WorkImg = {
  title: 'Decks',
  src: getWorkPath('resource/deck_suyh5h'),
  alt: 'ReSource investor pitch deck design',
  caption: 'Investor pitch deck',
};
const ReSourceDesignSystem: WorkImg = {
  title: 'Design System',
  src: getWorkPath('resource/design-system-widgets_xgbllf'),
  caption: 'design system widgets and typography',
  alt: 'resource design system widgets and typography',
};
const ReSourceDesignSystemUI: WorkImg = {
  title: null,
  src: getWorkPath('resource/design-system-ui_oojlyo'),
  caption: 'design system ui elements',
  alt: 'resource design system ui elements',
};
const ReSourceStakingDapp: WorkImg = {
  title: 'Staking dApp',
  src: getWorkVideoPath('resource/stake-SOURCE-tutorial_tm7bdg.mp4'),
  caption: 'SOURCE staking dapp design and how to video',
  alt: 'ReSource SOURCE staking dapp how to video',
};
const ReSourceMarketplace: WorkImg = {
  title: 'Mutual Credit Marketplace',
  src: getWorkPath('resource/resource-marketplace_ttx3nm'),
  caption: 'ReSource Marketplace for regenerative businesses',
  alt: 'ReSource Marketplace web app designs',
};
const ReSourceLogos: WorkImg = {
  title: 'Logos',
  src: getWorkPath('resource/resource-logos_jkfzpg'),
  caption: 'logos and token glyfs',
  alt: 'ReSource logos',
};

const ReSource: Project = {
  name: 'ReSource',
  role: 'Lead Designer -> Head of Product',
  summary:
    '8th member, Lead Designer, and later Head of Product of ReSource, a mutual credit crypto startup. ' +
    'Designed countless pitch decks, a marketplace web app, an admin web app, a staking web app, our logos, our token glyfs, many websites, swag, branding, and more.',
  skills: [
    'Product Strategy',
    'Product Design',
    'UX/UI Design',
    'Web Development',
    'Logo Design',
    'Branding',
  ],
  cover: {
    src: getWorkPath('resource/cover_stiyfc.jpg'),
    alt: 'ReSource project samples cover',
  },
  images: [
    ReSourceLogos,
    ReSourceDeck,
    ReSourceBizDeck,
    ReSourceDesignSystem,
    ReSourceDesignSystemUI,
    ReSourceStakingDapp,
    ReSourceMarketplace,
  ],
};

const BractWebsite: WorkImg = {
  title: 'Website',
  src: getWorkPath('bract/website-screens_y9oqxf'),
  alt: 'bract website screenshots',
  caption:
    'Screenshots from our responsive website developed HTML, CSS, and JavaScript/JQuery (it was 2015).',
};

const BractKickstarter: WorkImg = {
  title: 'Kickstarter',
  src: getWorkPath('bract/kickstarter-screens_itxeis'),
  alt: 'screenshots from bract company successful kickstarter campaign',
  caption: 'Kickstarter page screenshots',
  link: {
    label: 'View on Kickstarter',
    href: 'https://www.kickstarter.com/projects/1687612862/the-pioneer-collection?ref=nav_search&result=project&term=bract',
  },
};

const BractSlackLine: WorkImg = {
  title: 'Lifestyle Photography',
  src: getWorkPath('bract/slack-line_njbzic'),
  alt: 'slack line over ocean wearing blue bract raglan hemp tee',
  caption: 'Slack line photoshoot (blue shirt)',
};
const BractGrayHat: WorkImg = {
  title: null,
  src: getWorkPath('bract/lorenzo-hat_u7xzng'),
  alt: 'hiking man wearing wearing blue bract raglan hemp tee and gray bract hemp hat',
  caption: 'Hiking photoshoot (blue shirt, gray hat)',
};
const BractDesertBack: WorkImg = {
  title: null,
  src: getWorkPath('bract/bract-prev_ybsrrc'),
  alt: 'man in desert wearing blue hemp bract shirt and blue bract hemp hat',
  caption: 'Desert photoshoot (blue shirt, blue hat)',
};
const BractClimbingTower: WorkImg = {
  title: null,
  src: getWorkPath('bract/look-7_g8au2p'),
  alt: 'man climbing tower in white bract raglan tee',
  caption: 'Hiking photoshoot (white shirt & gray hat)',
};
const BractTeam: WorkImg = {
  title: 'Team',
  src: getWorkPath('bract/breact-team_igx3pq'),
  alt: 'Bract Company founders',
  caption: 'The founders',
};
const BractBlackHatGif: WorkImg = {
  title: 'Product Photography',
  src: getWorkPath('bract/bract-hat_ez5bxo'),
  alt: 'bract blue hemp hat rotating 360 gif',
  caption: '360 gif of blue hat for kickstarter and website',
};
const BractBridge: WorkImg = {
  title: null,
  src: getWorkPath('bract/bridge_kcyk3o'),
  alt: 'girls wearing blue and white bract hemp shirts',
  caption: 'urban nature photoshoot (white shirt, blue shirt)',
};
const BractGrayHatGif: WorkImg = {
  title: null,
  src: getWorkPath('bract/bract-product-photo-gray-hat_lawjku'),
  alt: 'bract gray hemp hat rotating 360 gif',
  caption: '360 gif of gray hat for kickstarter and website',
};
const BractLightTable: WorkImg = {
  title: null,
  src: getWorkPath('bract/light-table-1_zoa1hi'),
  alt: 'Close up of bract sketches on light table',
  caption: 'close up of sketches on light table',
};
const BractTheBoys: WorkImg = {
  title: null,
  src: getWorkPath('bract/the-boys_r5krng'),
  alt: 'Jonah Heath and Oliver Issa on Bract photoshoot',
  caption: 'Jonah and Olly preparing for the shot',
};
const BractJonah: WorkImg = {
  title: 'The Process',
  src: getWorkPath('bract/light-table-jonah_d6cxdm'),
  alt: 'Jonah Heath drawing Bract sketches on light table',
  caption: 'Jonah drawing some apparel sketches',
};
const BractHiFiShirts: WorkImg = {
  title: null,
  src: getWorkPath('bract/shirt_qeshkk'),
  alt: 'Bract Shirt high fidelity spec',
  caption: 'White hemp raglan high fidelity sketch',
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
    'Branding',
    'Marketing',
    'UX/UI Design',
    'Web Development',
    'Photography',
    'Video Capture and Editing',
  ],
  cover: {
    src: getWorkPath('bract/cover_cfuajn.jpg'),
    alt: 'Bract project samples cover',
  },
  images: [
    BractWebsite,
    BractKickstarter,
    BractTeam,
    BractSlackLine,
    BractGrayHat,
    BractBridge,
    BractDesertBack,
    BractClimbingTower,
    BractBlackHatGif,
    BractGrayHatGif,
    BractJonah,
    BractLightTable,
    BractTheBoys,
    BractHiFiShirts,
  ],
};

const GrowNodesWireframes = {
  title: null,
  caption: 'wireframe sketch',
  src: getWorkPath('grow-nodes/wireframes_gpjljg'),
  alt: 'wireframe sketch of grow nodes marijuana grow app',
};
const GrowNodesIA = {
  title: 'Mobile App Prototype',
  alt: 'information architecture for grow nodes marijuana grow app',
  src: getWorkPath('grow-nodes/ia_b1yd0n'),
  caption: 'information architecture',
};
const GrowNodesTeam = {
  title: 'Startup Weekend',
  alt: 'grow nodes team after winning first place and crowd favorite at Cal Poly Startup Weekend in 2016',
  src: getWorkPath('grow-nodes/team_rtunap'),
  caption:
    'grow nodes team after winning first place and crowd favorite at Cal Poly startup weekend in 2016',
};
const GrowNodesHardware = {
  title: null,
  alt: 'Grow Nodes diy cannabis growing hardware prototype',
  src: getWorkPath('grow-nodes/hardware-prototype_rv0tft'),
  caption: 'hardware prototype',
};
const GrowNodesDemo = {
  title: null,
  alt: 'Grow Nodes cannabis grow mobile app prototype',
  src: getWorkPath('grow-nodes/demo_gwxlvn'),
  caption: 'mobile app prototype',
};
const GrowNodes: Project = {
  name: 'Grow Nodes',
  role: 'Founder & Designer',
  summary:
    "Won first place and crowd favorite at Cal Poly's 2016 Startup Weekend. I was the only designer on the team.",
  skills: ['UX/UI Design', 'Prototyping', 'Pitch Deck Design'],
  cover: {
    src: getWorkPath('grow-nodes/cover_ku1d7t'),
    alt: 'Grow Nodes project samples cover',
  },
  images: [
    GrowNodesWireframes,
    GrowNodesIA,
    GrowNodesDemo,
    GrowNodesTeam,
    GrowNodesHardware,
  ],
};

const NuMundoDeck: WorkImg = {
  title: 'Investor Deck',
  alt: 'NuMundo investor deck design',
  src: getWorkPath('numundo/numundo-deck_ib1uof'),
  caption: 'investor deck',
};

const NuMundo: Project = {
  name: 'NuMundo',
  role: 'Designer',
  summary: '',
  skills: [],
  cover: {
    src: getWorkPath('numundo/cover_duhnnm'),
    alt: 'NuMundo project samples cover',
  },
  images: [NuMundoDeck],
};

const RoopairsFirst: WorkImg = {
  title: 'Website',
  alt: 'rooparis website draft',
  caption: 'first draft',
  src: getWorkPath('roopairs/v1_ctsudr'),
};

const RoopairsSecond: WorkImg = {
  title: null,
  alt: 'rooparis website draft',
  caption: 'second draft',
  src: getWorkPath('roopairs/v2_xrwhgp'),
};

const RoopairsThird: WorkImg = {
  title: null,
  alt: 'rooparis website draft',
  caption: 'third draft',
  src: getWorkPath('roopairs/v3_uh46iu'),
};

const RoopairsFourth: WorkImg = {
  title: null,
  alt: 'rooparis website draft',
  caption: 'fourth draft',
  src: getWorkPath('roopairs/v4_cjsg5l'),
};
const RoopairsFinal: WorkImg = {
  title: null,
  alt: 'rooparis website draft',
  caption: 'final draft website (designed and developed)',
  src: getWorkPath('roopairs/final_q5mv08'),
};
const Roopairs: Project = {
  name: 'Rooparis',
  role: 'project lead',
  summary: '',
  skills: [],
  cover: {
    src: getWorkPath('roopairs/cover_shffpc'),
    alt: 'roopairs project sample cover',
  },
  images: [
    RoopairsFirst,
    RoopairsSecond,
    RoopairsThird,
    RoopairsFourth,
    RoopairsFinal,
  ],
};

const CPRacingPdf: WorkImg = {
  title: 'Partnership Packet',
  src: getWorkPath('cpracing/cpracing-packet_qskbyf'),
  caption: 'benefacor partnership packet for cal poly racing slo',
  alt: 'benefacor partnership packet design for cal poly racing slo',
  link: {
    label: 'Download the PDF',
    href: getWorkPath('cpracing/partnership-packet_mxi9qa.pdf'),
  },
};
const CPRacing: Project = {
  name: 'Cal Poly Racing',
  role: 'lead designer, photographer',
  summary: '',
  skills: [],
  cover: {
    src: getWorkPath('cpracing/cover_uyusmq'),
    alt: 'cal poly racing',
  },
  images: [CPRacingPdf],
};

export const PROJECTS: Project[] = [
  Ropegun,
  ReSource,
  Bract,
  GrowNodes,
  NuMundo,
  Roopairs,
  CPRacing,
];
