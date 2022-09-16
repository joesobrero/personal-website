import { getCloudImgPath } from 'src/constants';

const getPath = (path) => getCloudImgPath('photography/' + path);

export type PhotographyImg = {
  title: string;
  src: string;
  location: string;
  alt: string;
};

const JUMPING_CACTUS_SNOW: PhotographyImg = {
  title: 'Jumping Cactus in the Snow',
  src: getPath('jumping-cactus-in-snow_fqq1v2.jpg'),
  location: 'Joshua Tree, California',
  alt: 'Birds eye close-up of snowy jumping cactus in Joshua Tree, California',
};
const WALKING_IN_THE_SNOW: PhotographyImg = {
  title: 'Walking in the Snow',
  src: getPath('walking-in-the-snow_zmungv.jpg'),
  location: 'Mammoth, California',
  alt: 'Girl walking up a snowy trail in Mammoth, California',
};
const TAHOE_BOULDERING_LAKE_VIEW: PhotographyImg = {
  title: 'Tahoe Boulder',
  src: getPath('tahoe-bouldering-with-lake-view_n3fabv.jpg'),
  location: 'Lake Tahoe, California',
  alt: 'Bouldering rock climbing with lake view in Lake Tahoe, Calfornia',
};
const SURFING_WASHED_OUT: PhotographyImg = {
  title: 'Surfer',
  src: getPath('surfing-washed-out-waves-pismo-beach_ndnq7f.jpg'),
  location: 'Shell Beach, California',
  alt: 'Surfer walking on water in washed out wave in Shell Beach, California',
};
const SUNRISE: PhotographyImg = {
  title: 'Sunrise',
  src: getPath('sunrise_bfyr8b.jpg'),
  location: 'Perfumo Canyon Road, California',
  alt: 'Sunrise with pond reflection on grassy hill with fence near Perfumo Canyon Road, San Luis Obispo, California',
};
const SEA_WEED: PhotographyImg = {
  title: 'Seaweed on the Beach',
  src: getPath('sea-weed-on-shell-beach_wppr4s.jpg'),
  location: 'Pismo Beach, California',
  alt: 'Sea weed on Pismo Beach in San Luis Obispo, California',
};
const JUMPING_IN_TO_SURF: PhotographyImg = {
  title: 'Jumping In',
  src: getPath('surfer-jumping-in-ocean_buoxie.jpg'),
  location: 'Shell Beach, California',
  alt: 'Surfer jumping in water off rock on foggy morning in Shell Beach, California',
};
const SNOWY_TREE_LINE: PhotographyImg = {
  title: 'Tree Line',
  src: getPath('snowy-tree-line_mklmp9.jpg'),
  location: 'Mammoth, California',
  alt: 'Snowy tree line in Mammoth, Calfiornia',
};
const SISTERS: PhotographyImg = {
  src: getPath('sisters_h4ifai.jpg'),
  title: 'Sisters',
  location: 'San Luis Obsipo, California',
  alt: '7 Sisters poking out of the clouds in San Luis Obsipo, California',
};
const DUNES: PhotographyImg = {
  title: 'Dune',
  src: getPath('pismo-dunes-san-luis-obispo-landscape-photography_vxvws0.jpg'),
  location: 'Pismo Dunes, California',
  alt: 'Huge sand dunes in Pismo Beach, California',
};
const MILKY_WAY: PhotographyImg = {
  title: 'Milky Way',
  src: getPath('milky-way_qjcurr.jpg'),
  location: 'Joshua Tree, California',
  alt: 'Astrophogotraphy of starry night with milky way in Joshua Tree, California ',
};
const WHALE_TAIL: PhotographyImg = {
  title: 'Whale Tail',
  alt: 'Whale tail shaped rock with waves splashing around in Pirates Cove, California',
  src: getPath('pirates-cove-ocean-landscape-photography_vaeogm.jpg'),
  location: 'Pirates Cove, California',
};
const LONG_LOOK: PhotographyImg = {
  title: 'Long Look',
  src: getPath('long-look_wtbqmd.jpg'),
  alt: 'Sunrise above the clouds in San Luis Obispo, California',
  location: 'San Luis Obsipo, California',
};
const LOG: PhotographyImg = {
  title: 'Log',
  src: getPath('log_vaktwf.jpg'),
  alt: 'Dreamy landscape in dry waterfall hike',
  location: 'Bay Area, California',
};
const MOONRISE: PhotographyImg = {
  src: getPath('moonrise_qgarjz.jpg'),
  title: 'Moonrise',
  alt: 'moonrise',
  location: '',
};
const JT_TWILIGHT: PhotographyImg = {
  src: getPath('joshua-tree-twighlight_l9bdgf.jpg'),
  title: 'Twilight',
  alt: 'Joshua Tree twilight landscape with stars and sunset',
  location: 'Joshua Tree, California',
};
const JOSHUA_TREE: PhotographyImg = {
  src: getPath('joshua-tree_mzei72.jpg'),
  title: 'Joshua Tree',
  alt: 'Joshua Tree close up in nice lighting',
  location: 'Joshua Tree, California',
};
const JT_LANDSCAPE: PhotographyImg = {
  title: 'In Focus',
  src: getPath('joshua-tree-blurry-landscape_x7ypeb.jpg'),
  alt: 'Snowy Joshua Tree landscape',
  location: 'Joshua Tree, California',
};
const HUASNA: PhotographyImg = {
  src: getPath('huasna-shoot_rcypk3.jpg'),
  alt: 'Photo shoot of skate video',
  location: 'Huasna Road, California',
  title: 'Photo Shoot',
};
const HIKING_TRAIL: PhotographyImg = {
  src: getPath('hiking-trail_iuleur.jpg'),
  title: 'Morning Trail',
  alt: 'Sunrise over dirt hiking trail in San Luis Obispo, California',
  location: 'San Luis Obispo, California',
};
const FLOWER_WALK: PhotographyImg = {
  src: getPath('flower-walk_e6cnu0.jpg'),
  title: 'Flower Walk',
  alt: 'Girl walking through field of flowers and metal sculptures',
  location: 'San Luis Obispo, California',
};
const ECHO_ROCK: PhotographyImg = {
  title: 'Echo Rock',
  src: getPath('echo-rock_r389qb.jpg'),
  alt: 'Echo Rock during winter sunset in Joshua Tree, CA',
  location: 'Joshua Tree, California',
};
const MILKY_WAVES: PhotographyImg = {
  title: 'Milky Waves',
  src: getPath('gray-long-expsoure-pirates-cove_hraqcq.jpg'),
  alt: 'Milky waves long exposure with throwing rocks on foggy beach',
  location: 'Pirates Cove, California',
};
const CACTUS_MACRO: PhotographyImg = {
  src: getPath('cactus-macro_pybwnp.jpg'),
  title: 'Macro',
  alt: 'Macro close up of jumping cactus in Joshua Tree, California',
  location: 'Joshua Tree, California',
};
const DONNER_PASS: PhotographyImg = {
  src: getPath('donner-pass-train_v1fsro.jpg'),
  title: 'Donner Pass',
  alt: 'Winter landscape of donner pass in Truckee, California',
  location: 'Truckee, California',
};
const BUSH: PhotographyImg = {
  src: getPath('bush-between-rocks_p64zbe.jpg'),
  title: 'Bush',
  alt: 'Bush growing between rocks on rock pile in Joshua Tree, California',
  location: 'Joshua Tree, California',
};
const BABY_CACTUS: PhotographyImg = {
  title: 'Baby Cactus',
  src: getPath('baby-jumping-cactus-joshua-tree_lxfsje.jpg'),
  alt: 'Baby jumping cactus with shallow depth of field in Joshua Tree, California',
  location: 'Joshua Tree, California',
};

export const PHOTOGRAPHY: PhotographyImg[] = [
  JUMPING_CACTUS_SNOW,
  DONNER_PASS,
  LONG_LOOK,
  SURFING_WASHED_OUT,
  DUNES,
  SUNRISE,
  JUMPING_IN_TO_SURF,
  SNOWY_TREE_LINE,
  SISTERS,
  WALKING_IN_THE_SNOW,
  MILKY_WAY,
  JT_LANDSCAPE,
  MOONRISE,
  JOSHUA_TREE,
  MILKY_WAVES,
  WHALE_TAIL,
  JT_TWILIGHT,
  HUASNA,
  HIKING_TRAIL,
  // LOG,
  CACTUS_MACRO,
  ECHO_ROCK,
  TAHOE_BOULDERING_LAKE_VIEW,
  SEA_WEED,
  // BUSH,
  FLOWER_WALK,
  BABY_CACTUS,
];
