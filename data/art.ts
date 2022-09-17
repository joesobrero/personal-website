import { getCloudImgPath } from 'src/constants';

const getPath = (path) => getCloudImgPath('art/' + path);

type ArtImg = {
  title: string;
  src: string;
  year: number;
  alt: string;
};

const YOLK = {
  title: 'Yolk',
  src: getPath('yolk_ncopiw.jpg'),
  year: 2016,
  alt: 'blue and yellow abstract art with flying egg yolk space ship',
};
const WHERE_AM_I = {
  title: 'Where am I?',
  src: getPath('where-am-i_hgexis.jpg'),
  year: 2014,
  alt: 'trippy word selector abstract art',
};
const WORLDS = {
  title: 'Worlds',
  src: getPath('worlds_uwzsir.jpg'),
  year: 2015,
  alt: 'abstract art objects dancing in the ocean',
};
const DAYTIME_DISCO = {
  title: 'Daytime Disco',
  src: getPath('daytime-disco_h5nzvv.jpg'),
  year: 2014,
  alt: 'abstract architecture art drawing',
};
const TABACCO = {
  title: 'Ancient Tabacco',
  src: getPath('tabacco_mftdq6.jpg'),
  year: 2015,
  alt: 'rock image minipualtion',
};
const EVERYTHING_AND_NOTHING = {
  title: 'Everything and Nothing',
  src: getPath('everything-and-nothing_g0dlge.jpg'),
  year: 2016,
  alt: 'trippy symmetrical line art',
};
const I = {
  title: 'I',
  src: getPath('i_swcnez.jpg'),
  year: 2016,
  alt: 'distorted photo with overlay of drawings',
};
const FORGOTTEN_RITUALS = {
  title: 'Forgotten Rituals',
  src: getPath('forgotten-rituals_bnoa6h.jpg'),
  year: 2014,
  alt: 'simple trippy digital art and photography',
};
const PINK = {
  title: 'Pink',
  src: getPath('triangles_xwxxba.jpg'),
  year: 2017,
  alt: 'geometric minimalist art',
};
const SOMETHING_FROM_NOTHING = {
  title: 'Something From Nothing',
  src: getPath('something-from-nothing_ipqbqc.jpg'),
  year: 2016,
  alt: 'minimalist digital art sunrise',
};
const THE_DANCE = {
  title: 'The Dance',
  src: getPath('the-dance_f0rsav.jpg'),
  year: 2018,
  alt: 'abstract digital minimalist red and blue painting',
};
const SWIMMING = {
  title: 'Swimming',
  src: getPath('swimming_b0qjbx.jpg'),
  year: 2014,
  alt: 'abstract film slides of art under microscope',
};
const IO = {
  title: '010110',
  src: getPath('010110_i1bxjk.jpg'),
  year: 2014,
  alt: 'abstract minimalist logos',
};

export const ART: ArtImg[] = [
  IO,
  WORLDS,
  DAYTIME_DISCO,
  TABACCO,
  PINK,
  I,
  FORGOTTEN_RITUALS,
  YOLK,
  SOMETHING_FROM_NOTHING,
  WHERE_AM_I,
  THE_DANCE,
  SWIMMING,
  EVERYTHING_AND_NOTHING,
];
