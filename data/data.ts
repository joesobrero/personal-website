import { ToolSection, ToolImage } from '@/types/types';
import { getCloudImgPath } from 'src/constants';

const getLogoPath = (srcName: string) =>
  getCloudImgPath('other-logos/' + srcName);

export const workflowToolImages: ToolImage[] = [
  {
    lightModeSrc: getLogoPath('notion_k2npvj'),
    darkModeSrc: getLogoPath('notion-w_u4wrgx'),
    alt: 'Notion logo',
    href: 'https://notion.so',
  },
  {
    lightModeSrc: getLogoPath('slack_tn1ste'),
    darkModeSrc: getLogoPath('slack_tn1ste'),
    alt: 'Slack logo',
    href: 'https://slack.com',
  },
  {
    lightModeSrc: getLogoPath('github_xjtgib'),
    darkModeSrc: getLogoPath('github_xjtgib'),
    alt: 'GitHub logo',
    href: 'https://github.com',
  },
];

export const applicationsToolImages: ToolImage[] = [
  {
    lightModeSrc: getLogoPath('figma_bkz2c3'),
    darkModeSrc: getLogoPath('figma_bkz2c3'),
    alt: 'Figma logo',
    href: 'https://figma.com',
  },
  {
    lightModeSrc: getLogoPath('vscode_veq8u4'),
    darkModeSrc: getLogoPath('vscode_veq8u4'),
    alt: 'VS Code logo',
    href: 'https://code.visualstudio.com',
  },
  {
    lightModeSrc: getLogoPath('framer_jaketx'),
    darkModeSrc: getLogoPath('framer-w_d9l4ot'),
    alt: 'Framer Logo',
    href: 'https://www.framer.com',
  },
  {
    lightModeSrc: getLogoPath('webflow_ywmtdm'),
    darkModeSrc: getLogoPath('webflow_ywmtdm'),
    alt: 'Webflow logo',
    href: 'https://webflow.com',
  },
  {
    lightModeSrc: getLogoPath('photoshop_uuyrpd'),
    darkModeSrc: getLogoPath('photoshop_uuyrpd'),
    alt: 'Adobe Photoshop logo',
    href: 'https://www.adobe.com/products/photoshop.html',
  },
  {
    lightModeSrc: getLogoPath('illustrator_lntbr8'),
    darkModeSrc: getLogoPath('illustrator_lntbr8'),
    alt: 'Adobe Illustrator logo',
    href: 'https://www.adobe.com/products/illustrator.html',
  },
  {
    lightModeSrc: getLogoPath('premier-pro_yf6quq'),
    darkModeSrc: getLogoPath('premier-pro_yf6quq'),
    alt: 'Adobe Premier Pro logo',
    href: 'https://www.adobe.com/products/premiere.html',
  },
  {
    lightModeSrc: getLogoPath('after-effects_thhymt'),
    darkModeSrc: getLogoPath('after-effects_thhymt'),
    alt: 'Adobe After Effects logo',
    href: 'https://www.adobe.com/products/aftereffects.html',
  },
  {
    lightModeSrc: getLogoPath('indesign_nmgqdp'),
    darkModeSrc: getLogoPath('indesign_nmgqdp'),
    alt: 'Adobe InDesign logo',
    href: 'https://www.adobe.com/products/indesign.html',
  },
];

export const languagesToolImages: ToolImage[] = [
  {
    lightModeSrc: getLogoPath('html5_kb8gda'),
    darkModeSrc: getLogoPath('html5_kb8gda'),
    alt: 'HTML5 logo',
    href: 'https://www.w3schools.com/tags/default.asp',
  },
  {
    lightModeSrc: getLogoPath('css_p8uhez'),
    darkModeSrc: getLogoPath('css_p8uhez'),
    alt: 'CSS3 logo',
    href: 'https://www.w3schools.com/css/default.asp',
  },
  {
    lightModeSrc: getLogoPath('js_cpvys9'),
    darkModeSrc: getLogoPath('js_cpvys9'),
    alt: 'JavaScript logo',
    href: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
  },
  {
    lightModeSrc: getLogoPath('typescript_k7z6hn'),
    darkModeSrc: getLogoPath('typescript_k7z6hn'),
    alt: 'TypeScript logo',
    href: 'https://www.typescriptlang.org',
  },
  {
    lightModeSrc: getLogoPath('swift_pjp9tm'),
    darkModeSrc: getLogoPath('swift_pjp9tm'),
    alt: 'Swift logo',
    href: 'https://www.apple.com/swift/',
  },
  {
    lightModeSrc: getLogoPath('python_zq9n9s'),
    darkModeSrc: getLogoPath('python_zq9n9s'),
    alt: 'Python logo',
    href: 'https://www.python.org',
  },
];
export const frameworksToolImages: ToolImage[] = [
  {
    lightModeSrc: getLogoPath('charkaui_lqavme'),
    darkModeSrc: getLogoPath('charkaui_lqavme'),
    alt: 'CharkaUI logo',
    href: 'https://chakra-ui.com',
  },
  {
    lightModeSrc: getLogoPath('react_bvmrmf'),
    darkModeSrc: getLogoPath('react_bvmrmf'),
    alt: 'React logo',
    href: 'https://reactjs.org',
  },
  {
    lightModeSrc: getLogoPath('nextjs_n5c1ix'),
    darkModeSrc: getLogoPath('nextjs_n5c1ix'),
    alt: 'NextJS logo',
    href: 'https://nextjs.org',
  },
];

export const toolSections: ToolSection[] = [
  { title: 'frameworks', images: frameworksToolImages },
  { title: 'applications', images: applicationsToolImages },
  { title: 'languages', images: languagesToolImages },
  { title: 'workflow', images: workflowToolImages },
];

export {};
