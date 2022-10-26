import { getCloudImgPath } from 'src/constants';

const getLogoPath = (srcName: string) =>
  getCloudImgPath('bloc-logos/' + srcName);

type BlocLogo = {
  lightModeSrc: string;
  darkModeSrc?: string;
  alt: string;
};

const bloc00: BlocLogo = {
  lightModeSrc: getLogoPath('bloc-00_qj3msr'),
  darkModeSrc: getLogoPath('bloc-00-w_tjvc6n'),
  alt: 'bloc logo image',
};

const bloc01: BlocLogo = {
  lightModeSrc: getLogoPath('bloc-01_moi2zr'),
  alt: 'bloc logo image',
};
const bloc02: BlocLogo = {
  lightModeSrc: getLogoPath('bloc-02_pyqvyc'),
  alt: 'bloc logo image',
};
const bloc03: BlocLogo = {
  lightModeSrc: getLogoPath('bloc-03_hfiggn'),
  alt: 'bloc logo image',
};
const bloc04: BlocLogo = {
  lightModeSrc: getLogoPath('bloc-04_rxgbbt'),
  alt: 'bloc logo image',
};
const bloc05: BlocLogo = {
  lightModeSrc: getLogoPath('bloc-05_f63fu4'),
  alt: 'bloc logo image',
};
const bloc06: BlocLogo = {
  lightModeSrc: getLogoPath('bloc-06_nuqimc'),
  alt: 'bloc logo image',
};
const bloc07: BlocLogo = {
  lightModeSrc: getLogoPath('bloc-07_toicar'),
  alt: 'bloc logo image',
};
const bloc08: BlocLogo = {
  lightModeSrc: getLogoPath('bloc-08_evwbge'),
  alt: 'bloc logo image',
};
const bloc09: BlocLogo = {
  lightModeSrc: getLogoPath('bloc-09_tqiqbs'),
  alt: 'bloc logo image',
};
const bloc10: BlocLogo = {
  lightModeSrc: getLogoPath('bloc-10_fcfhi5'),
  alt: 'bloc logo image',
};
const bloc11: BlocLogo = {
  lightModeSrc: getLogoPath('bloc-11_yjklx2'),
  alt: 'bloc logo image',
};

export const BLOC_LOGOS: BlocLogo[] = [
  bloc00,
  bloc01,
  bloc02,
  bloc03,
  bloc04,
  bloc05,
  bloc06,
  bloc07,
  bloc08,
  bloc09,
  bloc10,
  bloc11,
];
